import '../styles/preflight.css';
import '../styles/modern-normalize.css';
import { themeClass } from '../styles';

export default function ThemeProvider({
  theme,
  className,
  children,
}: { children: React.ReactNode; theme?: string; className?: string }) {
  return (
    <div className={`${theme ?? themeClass} ${className}`}>{children}</div>
  );
}
