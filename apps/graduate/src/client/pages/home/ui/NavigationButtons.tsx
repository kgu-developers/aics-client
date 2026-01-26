import { ArrowRight } from 'lucide-react';

import { NavigateButton } from './NavigateButton';
import { BUTTONS } from '../model/button';
import * as styles from '../styles/HomePage.css';

interface ButtonData {
  href: string;
  label: string;
}

interface NavigationButtonsProps {
  button?: ButtonData;
}

export default function NavigationButtons({ button }: NavigationButtonsProps) {
  if (!button) return null;

  return (
    <section className={styles.homeButtonSection}>
      <NavigateButton
        href={button.href}
        icon={<ArrowRight size={24} />}
        label={button.label}
      />

      {BUTTONS.map(btn => (
        <NavigateButton
          key={btn.label}
          href={btn.href}
          icon={btn.icon}
          label={btn.label}
        />
      ))}
    </section>
  );
}
