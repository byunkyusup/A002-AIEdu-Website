import { testimonials } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import './testimonials.css';

// 정렬은 모듈 스코프에서 1회만 — 매 렌더마다 새 배열을 만들지 않는다.
const sorted = [...testimonials].sort(
  (a, b) => Number(b.feature ?? false) - Number(a.feature ?? false),
);
const [feature, ...rest] = sorted;

export function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="grid">
        <header className="testimonials__head">
          <p className="kicker">VOICES · 학부모·학생 후기</p>
          <h2 id="testimonials-heading" className="testimonials__title">
            만들어 본 아이의 표정이<br />가장 정확한 후기입니다
          </h2>
        </header>

        <Reveal as="figure" className="testimonial testimonial--feature">
          <blockquote className="testimonial__quote">{feature.quote}</blockquote>
          <figcaption className="testimonial__author">{feature.author}</figcaption>
        </Reveal>

        <ul className="testimonials__rest">
          {rest.map((t, i) => (
            <Reveal as="li" key={t.author} index={i}>
              <figure className="testimonial">
                <blockquote className="testimonial__quote">{t.quote}</blockquote>
                <figcaption className="testimonial__author">{t.author}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
