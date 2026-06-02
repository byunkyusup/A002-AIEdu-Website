import type { ReactNode } from 'react';
import './button.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  ariaLabel?: string;
  full?: boolean;
}

/** 링크/버튼 겸용 CTA. href가 있으면 <a>, 없으면 <button>. */
export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  ariaLabel,
  full,
}: ButtonProps) {
  const cls = ['btn', `btn--${variant}`, full ? 'btn--full' : '']
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a className={cls} href={href} aria-label={ariaLabel} onClick={onClick}>
        <span className="btn__label">{children}</span>
        {variant !== 'ghost' && <span className="btn__arrow" aria-hidden="true">→</span>}
      </a>
    );
  }

  return (
    <button className={cls} type="button" aria-label={ariaLabel} onClick={onClick}>
      <span className="btn__label">{children}</span>
      {variant !== 'ghost' && <span className="btn__arrow" aria-hidden="true">→</span>}
    </button>
  );
}
