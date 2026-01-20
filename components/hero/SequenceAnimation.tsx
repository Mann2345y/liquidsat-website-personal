'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useBreakpoint, BreakpointType } from '../../hooks/use-breakpoint';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SequenceConfig {
  loopConfig?: {
    loopDuration: number;
    framesPerLoop: number;
    transitionStartScrollOffset: number;
    loopStartFrame: number;
    loopEndFrame: number;
    transitionDuration: number;
  };
  countPreloadFrames?: number;
  offsetVideoEnd?: {
    [BreakpointType.Desktop]: number;
    [BreakpointType.Tablet]: number;
    [BreakpointType.Mobile]: number;
  };
  totalFrames: {
    [BreakpointType.Desktop]: number;
    [BreakpointType.Tablet]: number;
    [BreakpointType.Mobile]: number;
  };
  framePath?: string; // Custom path pattern, e.g., '/desktop/frame_{frame}.webp'
  frameMapper?: (logicalFrame: number) => number; // Map logical frame number to actual frame file number
}

interface SequenceAnimationProps {
  triggerElement: HTMLElement | null;
  canvasElement: HTMLCanvasElement | null;
  config: SequenceConfig;
}

export default function SequenceAnimation({
  triggerElement,
  canvasElement,
  config,
}: SequenceAnimationProps) {
  const { breakpoint, isMobile } = useBreakpoint();
  const [isLooping, setIsLooping] = useState(false);
  const currentFrameRef = useRef({ contents: 1 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameImagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastScrollPositionRef = useRef(0);
  const isLoopActiveRef = useRef(config.loopConfig !== undefined);

  const framePath = config.framePath || '/desktop/frame_{frame}.webp';
  const frameMapper = config.frameMapper || ((frame: number) => frame);

  // Load a single frame
  const loadFrame = useCallback((frameNumber: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      if (frameImagesRef.current.has(frameNumber)) {
        resolve(frameImagesRef.current.get(frameNumber)!);
        return;
      }

      const img = new Image();
      // Map logical frame number to actual frame file number
      const actualFrameNumber = frameMapper(frameNumber);
      const paddedNumber = String(actualFrameNumber).padStart(3, '0');
      const path = framePath.replace('{frame}', paddedNumber);
      img.src = path;
      img.onload = () => {
        frameImagesRef.current.set(frameNumber, img);
        resolve(img);
      };
      img.onerror = reject;
    });
  }, [framePath, frameMapper]);

  // Preload frames
  const preloadFrames = useCallback(async (start: number, end: number) => {
    const totalFrames = config.totalFrames[breakpoint];
    if (start < 1) start = 1;
    if (end > totalFrames) end = totalFrames;

    const promises: Promise<void>[] = [];
    for (let i = start; i <= end; i++) {
      if (!frameImagesRef.current.has(i)) {
        promises.push(
          loadFrame(i).then(() => {
            // Frame loaded
          })
        );
      }
    }
    await Promise.all(promises);
  }, [loadFrame, config.totalFrames, breakpoint]);

  // Render frame to canvas
  const renderFrame = useCallback((frameNumber: number) => {
    const img = frameImagesRef.current.get(frameNumber);
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    if (!img || !ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const pixelRatio = window.devicePixelRatio || 1;

    const drawWidth = canvas.width;
    const drawHeight = canvas.height;

    // Tablet zoom effect
    if (breakpoint === BreakpointType.Tablet) {
      ctx.drawImage(
        img,
        -drawWidth / pixelRatio * 0.2,
        0,
        drawWidth / pixelRatio * 1.4,
        drawHeight / pixelRatio
      );
    } else {
      ctx.drawImage(
        img,
        0,
        0,
        drawWidth / pixelRatio,
        drawHeight / pixelRatio
      );
    }
  }, [breakpoint]);

  // Play loop animation
  const playLoop = useCallback(async () => {
    if (!isLoopActiveRef.current || !isLooping) return;

    const loopConfig = config.loopConfig!;
    const startTime = Date.now();

    const animate = () => {
      if (!isLooping) return;

      const elapsed = (Date.now() - startTime) % (loopConfig.loopDuration * 1000);
      const progress = elapsed / (loopConfig.loopDuration * 1000);
      // Calculate frame with proper wrapping for cyclic animation
      // Use modulo to ensure smooth wrapping from end to start
      const frameRange = loopConfig.loopEndFrame - loopConfig.loopStartFrame + 1;
      const frameOffset = Math.round(progress * (frameRange - 1));
      const frame = loopConfig.loopStartFrame + (frameOffset % frameRange);

      if (frame !== currentFrameRef.current.contents) {
        currentFrameRef.current.contents = frame;
        renderFrame(frame);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    await preloadFrames(loopConfig.loopStartFrame, loopConfig.loopEndFrame);
    animate();
  }, [isLooping, config.loopConfig, preloadFrames, renderFrame]);

  // Handle scroll transition
  const handleScrollTransition = useCallback((scrollProgress: number) => {
    if (!isLoopActiveRef.current) return;
    const loopConfig = config.loopConfig!;

    if (isLooping && scrollProgress > 0) {
      setIsLooping(false);
      gsap.to(currentFrameRef.current, {
        onComplete: () => setIsLooping(false),
        duration: loopConfig.transitionDuration,
        contents: loopConfig.framesPerLoop - loopConfig.transitionStartScrollOffset,
        ease: 'power2.inOut',
      });
    } else if (!isLooping && scrollProgress === 0) {
      preloadFrames(loopConfig.loopStartFrame, loopConfig.loopEndFrame);
      setIsLooping(true);
      playLoop();
    }
  }, [isLooping, config.loopConfig, preloadFrames, playLoop]);

  // Setup canvas
  useEffect(() => {
    if (!canvasElement || isMobile) return;

    canvasRef.current = canvasElement;
    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    const updateCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (!canvasElement) return;

      canvasElement.style.width = width + 'px';
      canvasElement.style.height = height + 'px';
      canvasElement.width = width * pixelRatio;
      canvasElement.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);

      renderFrame(currentFrameRef.current.contents);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initial setup
    const init = async () => {
      const countPreload = config.countPreloadFrames || 10;
      await preloadFrames(1, countPreload);
      renderFrame(1);

      // Start loop if active
      if (isLoopActiveRef.current) {
        setIsLooping(true);
        playLoop();
      }

      // Background load remaining frames
      const totalFrames = config.totalFrames[breakpoint];
      for (let i = countPreload + 1; i <= totalFrames; i++) {
        loadFrame(i).catch(() => {
          // Silently handle errors
        });
      }
    };

    init();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [canvasElement, isMobile, config, preloadFrames, renderFrame, loadFrame, playLoop, breakpoint]);

  // Setup ScrollTrigger
  useEffect(() => {
    if (!triggerElement || !canvasElement || isMobile) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingUp = currentScroll < lastScrollPositionRef.current;
      lastScrollPositionRef.current = currentScroll;

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const offsetEnd = config.offsetVideoEnd?.[breakpoint] || 0;
      const adjustedProgress = Math.min(1, currentScroll / (totalHeight - offsetEnd));

      handleScrollTransition(adjustedProgress);

      if (!isLooping) {
        const totalFrames = config.totalFrames[breakpoint];
        const frame = Math.round(adjustedProgress * totalFrames);
        if (frame !== currentFrameRef.current.contents && frame >= 1) {
          currentFrameRef.current.contents = frame;
          const preloadAmount = 5;
          preloadFrames(
            frame + (isScrollingUp ? -preloadAmount : 1),
            frame + (isScrollingUp ? -1 : preloadAmount)
          );
          renderFrame(frame);
        }
      }
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom bottom',
      pinSpacing: false,
      scrub: true,
      onUpdate: (self) => {
        handleScrollTransition(self.progress);
        handleScroll();
      },
    });

    scrollTriggerRef.current = scrollTrigger;

    return () => {
      scrollTrigger.kill();
    };
  }, [triggerElement, canvasElement, isMobile, config, breakpoint, isLooping, handleScrollTransition, preloadFrames, renderFrame]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      frameImagesRef.current.clear();
    };
  }, []);

  return null; // This component doesn't render anything
}
