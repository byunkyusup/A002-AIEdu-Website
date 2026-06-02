import { useState } from 'react';
import { faqs } from '../../data/content';
import './faq.css';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <div className="grid faq__grid">
        <header className="faq__head">
          <p className="kicker">FAQ · 자주 묻는 질문</p>
          <h2 id="faq-heading" className="faq__title">
            궁금한 점을<br />솔직하게 답합니다
          </h2>
          <p className="faq__lead">
            더 궁금한 점은 무료 진단 수업 신청 시 1:1로 안내해 드립니다.
          </p>
        </header>

        <ul className="faq__list">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q} className={['faq-item', isOpen ? 'is-open' : ''].join(' ')}>
                <h3 className="faq-item__heading">
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq-item__q">{faq.q}</span>
                    <span className="faq-item__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-item__answer"
                  id={`faq-answer-${i}`}
                  aria-labelledby={`faq-question-${i}`}
                  hidden={!isOpen}
                >
                  <p>{faq.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
