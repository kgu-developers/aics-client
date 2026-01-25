import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

import { NavigateButton } from './NavigateButton';
import { BUTTONS } from '../model/button';
import * as styles from '../styles/HomePage.css';

interface ButtonData {
  href: string;
  label: string;
}

interface GraduationStatusHeaderProps {
  title?: string;
  description?: string;
  button?: ButtonData;
}

export default function GraduationStatusHeader({
  title,
  description,
  button,
}: GraduationStatusHeaderProps) {
  if (!button) return null;

  const StatusTextDisplay = () => {
    if (!title || !description) {
      return (
        <div className={styles.headerTextWrapper}>
          <h1 className={styles.headerTitle}>준비중</h1>
          <p className={styles.headerDescription}>
            아직 졸업 요건 취득 일정이 지정되지 않았어요.
          </p>
        </div>
      );
    }

    return (
      <div className={styles.headerTextWrapper}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <p className={styles.headerDescription}>
          {description.split('\n').map(line => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </div>
    );
  };

  return (
    <section className={styles.header}>
      <StatusTextDisplay />
      <NavigationButtons button={button} />
    </section>
  );
}

const NavigationButtons = ({ button }: { button: ButtonData }) => {
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
};
