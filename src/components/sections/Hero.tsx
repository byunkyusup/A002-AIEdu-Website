import { hero } from '../../data/content';
import { Button } from '../ui/Button';
import './hero.css';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="grid hero__grid">
        <div className="hero__body">
          <p className="kicker hero__kicker">{hero.kicker}</p>

          <h1 id="hero-heading" className="hero__headline">
            {hero.headline[0]}
            <br />
            <span className="hero__headline-accent">{hero.headline[1]}</span>
          </h1>

          <p className="hero__sub">{hero.sub}</p>

          <div className="hero__cta">
            <Button href="#apply" variant="primary">{hero.ctaPrimary}</Button>
            <Button href="#tracks" variant="secondary">{hero.ctaSecondary}</Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <div className="hero__code">
              <span className="hero__code-line"><em>def</em> 만들다(아이디어):</span>
              <span className="hero__code-line hero__code-line--indent">
                while <em>궁금하다</em>:
              </span>
              <span className="hero__code-line hero__code-line--indent2">
                코드 = <em>실험</em>(아이디어)
              </span>
              <span className="hero__code-line hero__code-line--indent2">
                <em>if</em> 작동한다(코드):
              </span>
              <span className="hero__code-line hero__code-line--indent3">
                return <strong>나의_작품</strong>
              </span>
              <span className="hero__code-cursor" />
            </div>
            <div className="hero__chip hero__chip--1">AI</div>
            <div className="hero__chip hero__chip--2">{'{ }'}</div>
            <div className="hero__chip hero__chip--3">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}
