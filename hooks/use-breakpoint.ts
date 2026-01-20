import { useState, useEffect } from 'react';

export enum BreakpointType {
  Desktop = 'Desktop',
  Tablet = 'Tablet',
  Mobile = 'Mobile',
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointType>(BreakpointType.Desktop);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateBreakpoint = () => {
      const w = window.innerWidth;
      setWidth(w);

      if (w >= 1025) {
        setBreakpoint(BreakpointType.Desktop);
      } else if (w >= 481) {
        setBreakpoint(BreakpointType.Tablet);
      } else {
        setBreakpoint(BreakpointType.Mobile);
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return {
    breakpoint,
    width,
    isDesktop: breakpoint === BreakpointType.Desktop,
    isTablet: breakpoint === BreakpointType.Tablet,
    isMobile: breakpoint === BreakpointType.Mobile,
  };
};
