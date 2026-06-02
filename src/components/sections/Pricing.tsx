import { plans } from '../../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import './pricing.css';

export function Pricing() {
  return (
    <section className="section section--sunken pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="grid">
        <header className="pricing__head">
          <p className="kicker">PRICING · 요금제</p>
          <h2 id="pricing-heading" className="pricing__title">
            부담 없이 시작하고,<br />
            <span className="pricing__title-em">아이 속도에 맞춰</span> 키워요
          </h2>
          <p className="pricing__note">※ 아래 금액은 예시이며 실제 수강료는 상담 시 안내됩니다.</p>
        </header>

        <ul className="pricing__grid">
          {plans.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.name}
              index={i}
              className={['plan', plan.recommended ? 'plan--featured' : ''].join(' ')}
            >
              {plan.recommended && <span className="plan__badge">가장 인기</span>}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__target">{plan.target}</p>
              <div className="plan__price">
                <span className="plan__amount display-num">{plan.price}</span>
                <span className="plan__period">{plan.period}</span>
              </div>
              <ul className="plan__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button
                href="#apply"
                variant={plan.recommended ? 'primary' : 'secondary'}
                full
              >
                {plan.price === '무료' ? '무료로 시작하기' : '상담 신청하기'}
              </Button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
