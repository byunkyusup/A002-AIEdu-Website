import { useEffect, useRef, useState } from 'react';
import { brand, nav } from '../../data/content';
import { Button } from '../ui/Button';
import './header.css';

const DESKTOP_BREAKPOINT = 920;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 데스크톱 폭으로 리사이즈되면 모바일 메뉴를 닫아 접근성 트리에서 중복 내비를 제거.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 메뉴 열림 시 첫 항목으로 포커스 이동, Esc로 닫고 버거 버튼으로 포커스 복원.
  useEffect(() => {
    if (!menuOpen) return;
    const firstLink = menuRef.current?.querySelector<HTMLElement>('a, button');
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={['site-header', scrolled ? 'is-scrolled' : ''].join(' ')}>
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label={`${brand.name} 홈`}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">{brand.name}</span>
          <span className="brand__en">{brand.nameEn}</span>
        </a>

        <nav className="site-nav" aria-label="주요 메뉴">
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.id}>
                <a className="site-nav__link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__cta">
          <Button href="#apply" variant="primary">
            무료 진단 신청
          </Button>
        </div>

        <button
          ref={burgerRef}
          className="site-header__burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={['burger', menuOpen ? 'is-open' : ''].join(' ')} aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={['mobile-menu', menuOpen ? 'is-open' : ''].join(' ')}
        hidden={!menuOpen}
      >
        <ul className="mobile-menu__list">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#apply" variant="primary" full>
          무료 진단 신청
        </Button>
      </div>
    </header>
  );
}
