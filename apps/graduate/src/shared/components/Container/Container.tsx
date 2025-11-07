import { container } from './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <div style={style} className={container}>
      {children}
    </div>
  );
}
