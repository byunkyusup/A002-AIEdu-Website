import { finalCta } from '../../data/content';
import { Button } from '../ui/Button';
import './final-cta.css';

export function FinalCta() {
  return (
    <section className="section section--ink final-cta" id="apply" aria-labelledby="apply-heading">
      <div className="grid final-cta__grid">
        <div className="final-cta__body">
          <p className="kicker">START · 무료 진단 수업</p>
          <h2 id="apply-heading" className="final-cta__title">{finalCta.headline}</h2>
          <p className="final-cta__sub">{finalCta.sub}</p>
          <div className="final-cta__actions">
            <Button href="#apply" variant="primary">{finalCta.button}</Button>
            <span className="final-cta__hint">신청 후 1영업일 내 연락드립니다 (예시)</span>
          </div>
        </div>

        <ul className="final-cta__points" aria-label="진단 수업 안내">
          <li><span className="final-cta__point-num display-num">1:1</span>아이 수준·관심사 맞춤 진단</li>
          <li><span className="final-cta__point-num display-num">무료</span>부담 없는 첫 수업 1회</li>
          <li><span className="final-cta__point-num display-num">맞춤</span>가장 잘 맞는 트랙 추천</li>
        </ul>
      </div>
    </section>
  );
}
