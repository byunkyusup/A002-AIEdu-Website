import { brand, nav } from '../../data/content';
import './footer.css';

const year = 2026;

export function Footer() {
  return (
    <footer className="site-footer section--ink">
      <div className="grid site-footer__grid">
        <div className="site-footer__brand">
          <div className="brand">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__name" style={{ color: 'var(--color-ink-onDark)' }}>
              {brand.name}
            </span>
          </div>
          <p className="site-footer__tagline">{brand.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="바닥글 메뉴">
          <h3 className="site-footer__heading">둘러보기</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h3 className="site-footer__heading">상담 문의</h3>
          <p>평일 10:00 – 19:00</p>
          <p>
            <a href="#apply">무료 진단 수업 신청 →</a>
          </p>
          <p className="site-footer__note">
            ※ 본 사이트의 통계·후기·강사·요금은 예시(플레이스홀더)이며 실제 운영 정보로
            교체가 필요합니다.
          </p>
        </div>
      </div>

      <div className="grid site-footer__base">
        <p>© {year} {brand.name} ({brand.nameEn}). 데모 페이지.</p>
        <p className="site-footer__legal">
          개인정보처리방침 · 이용약관 (예시)
        </p>
      </div>
    </footer>
  );
}
