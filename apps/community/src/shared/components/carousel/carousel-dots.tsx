import { cn } from '@aics-client/design-system/utils';
import type { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useId } from 'react';



import * as styles from '~/shared/components/carousel/carousel-dots.css';
import { useDotButton } from '~/shared/hooks/use-dot-button';

interface DotButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

function DotButton({ children, active, ...props }: DotButtonProps) {
  return (
    <button
      type='button'
      className={cn(styles.dot, active && styles.dotActive)}
      {...props}
    >
      {children}
    </button>
  );
}

function CarouselDots({
  emblaApi,
}: {
  emblaApi: EmblaCarouselType | undefined;
}) {
  const carouselDotsId = useId();

  const handleNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

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
