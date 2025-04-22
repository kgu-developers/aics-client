import type { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useId } from 'react';

import { cn } from '@aics-client/design-system/utils';

import * as styles from '~/components/carousel-dots.css';
import { useDotButton } from '~/components/shared/components/carousel/hooks/use-dot-button';

interface DotButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

function DotButton({ children, active, ...props }: DotButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.dot, active && styles.dotActive)}
      {...props}
    >
      {children}
    </button>
  );
}

function CarouselDots({
  emblaApi,
}: { emblaApi: EmblaCarouselType | undefined }) {
  const handleNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const carouselDotsId = useId();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    handleNavButtonClick,
  );

  return (
    <div className={styles.dots}>
      {scrollSnaps.map((scrollSnap, index) => (
        <DotButton
          key={`carousel-dots-${carouselDotsId}-${scrollSnap}}`}
          onClick={() => onDotButtonClick(index)}
          active={index === selectedIndex}
        />
      ))}
    </div>
  );
}

export { DotButton, CarouselDots };
