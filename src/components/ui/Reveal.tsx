import type { ReactNode, ElementType, CSSProperties } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  /** stagger index — global.css가 --reveal-i * 60ms 지연을 적용 */
  index?: number;
  className?: string;
  style?: CSSProperties;
}

/** 스크롤 진입 시 페이드+상승 리빌. compositor-friendly(opacity/transform)만 사용. */
export function Reveal({ children, as, index = 0, className, style }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={{ ['--reveal-i' as string]: index, ...style }}
    >
      {children}
    </Tag>
  );
}
