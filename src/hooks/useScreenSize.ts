import { BREAKPOINTS } from "@/constants/breakPoints";
import { useMediaQuery } from "./useMediaQuery";

export const useScreenSize = () => {
  const isXsMobile = useMediaQuery(
    `(max-width: ${BREAKPOINTS.XS_MOBILE}px)`
  );

  const isMobile = useMediaQuery(
    `(max-width: ${BREAKPOINTS.MOBILE}px)`
  );

  const isLargeMobile = useMediaQuery(
    `(min-width: ${BREAKPOINTS.MOBILE + 1}px) and (max-width: ${BREAKPOINTS.LARGE_MOBILE}px)`
  );

  const isTablet = useMediaQuery(
    `(min-width: ${BREAKPOINTS.LARGE_MOBILE + 1}px) and (max-width: ${BREAKPOINTS.TABLET}px)`
  );

  const isDesktop = useMediaQuery(
    `(min-width: ${BREAKPOINTS.TABLET + 1}px)`
  );

  return {
    isXsMobile,
    isMobile,
    isLargeMobile,
    isTablet,
    isDesktop,
  };
};