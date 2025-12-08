import { type GraduationType } from '~/shared/constants';
import { STEP } from './step';
import { useEffect, useState } from 'react';

export default function useStep({
  selectedOption,
  confirm,
}: {
  selectedOption: GraduationType;
  confirm: boolean;
}) {
  const step = STEP[selectedOption];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = () => {
      if (confirm) return;

      if (step && step.length > 0) {
        if (index < step.length) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }
    };

    const timeoutId = setInterval(timeout, 2000);
    return () => clearInterval(timeoutId);
  }, [index, confirm]);

  return { index, step };
}
