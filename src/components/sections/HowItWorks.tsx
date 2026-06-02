import { steps, instructors } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import './how-it-works.css';

export function HowItWorks() {
  return (
    <section className="section how" id="how" aria-labelledby="how-heading">
      <div className="grid">
        <header className="how__head">
          <p className="kicker">HOW · 학습 방식</p>
          <h2 id="how-heading" className="how__title">
            진단부터 성장 리포트까지,<br />
            <span className="how__title-em">네 단계로 함께</span> 합니다
          </h2>
        </header>

        <ol className="how__steps">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.no} index={i} className="how-step">
              <span className="how-step__no display-num">{step.no}</span>
              <div className="how-step__body">
                <h3 className="how-step__title">{step.title}</h3>
                <p className="how-step__text">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="how__instructors">
          <h3 className="how__instructors-title">가르치는 사람들</h3>
          <ul className="how__instructor-list">
            {instructors.map((ins) => (
              <li key={ins.name} className="instructor">
                <div className="instructor__avatar" aria-hidden="true">
                  {ins.name.charAt(0)}
                </div>
                <div className="instructor__body">
                  <p className="instructor__name">{ins.name}</p>
                  <p className="instructor__credential">{ins.credential}</p>
                  <p className="instructor__track">{ins.track}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
