import { valueProps } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import './value-props.css';

export function ValueProps() {
  return (
    <section className="section value-props" id="why" aria-labelledby="why-heading">
      <div className="grid">
        <header className="value-props__head">
          <p className="kicker">WHY · 왜 AI 교육인가</p>
          <h2 id="why-heading" className="value-props__title">
            지금 코딩을 배우는 건<br />
            <span className="value-props__title-em">미래를 읽는 능력</span>입니다
          </h2>
          <p className="value-props__lead">
            단순히 프로그램을 짜는 기술이 아니라, 문제를 바라보고 해결하는 사고의
            틀을 기릅니다. 아이가 평생 쓸 네 가지 힘에 집중합니다.
          </p>
        </header>

        <ul className="value-props__list">
          {valueProps.map((vp, i) => (
            <Reveal as="li" key={vp.tag} index={i % 2} className="vp-card">
              <span className="vp-card__index display-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="vp-card__tag">{vp.tag}</span>
              <h3 className="vp-card__title">{vp.title}</h3>
              <p className="vp-card__body">{vp.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
