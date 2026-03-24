import { ArrowRight } from 'lucide-react';

import { checkPageAccess, notifyWarning } from '~/shared/utils';

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

type PageAccessType = 'apply' | 'certification' | 'thesis';

function getAccessType(href: string): PageAccessType | null {
  if (href.startsWith('/apply')) return 'apply';
  if (href.startsWith('/certification')) return 'certification';
  if (href.startsWith('/thesis')) return 'thesis';
  return null;
}

export default function NavigationButtons({ button }: NavigationButtonsProps) {
  if (!button) return null;

  const accessType = getAccessType(button.href);

  const handleBeforeNavigate = accessType
    ? async () => {
        const { canAccess, reason } = await checkPageAccess(accessType);
        if (!canAccess) {
          notifyWarning(reason ?? '현재 제출 기간이 아닙니다.');
          return false;
        }
        return true;
      }
    : undefined;

  return (
    <section className={styles.homeButtonSection}>
      <NavigateButton
        href={button.href}
        icon={<ArrowRight size={24} />}
        label={button.label}
        onBeforeNavigate={handleBeforeNavigate}
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
