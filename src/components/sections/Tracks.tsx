import { useRef, useState, type KeyboardEvent } from 'react';
import { tracks } from '../../data/content';
import './tracks.css';

export function Tracks() {
  const [active, setActive] = useState(0);
  const track = tracks[active];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // WAI-ARIA Tabs 패턴: 화살표/Home/End로 탭 간 포커스 이동 + 선택.
  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = tracks.length - 1;
    let next = i;
    switch (e.key) {
      case 'ArrowRight': next = i === last ? 0 : i + 1; break;
      case 'ArrowLeft': next = i === 0 ? last : i - 1; break;
      case 'Home': next = 0; break;
      case 'End': next = last; break;
      default: return;
    }
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section section--sunken tracks" id="tracks" aria-labelledby="tracks-heading">
      <div className="grid">
        <header className="tracks__head">
          <p className="kicker">CURRICULUM · 연령별 트랙</p>
          <h2 id="tracks-heading" className="tracks__title">
            블록코딩에서 생성형 AI까지,<br />단계별로 성장하는 길
          </h2>
        </header>

        <div className="tracks__tabs" role="tablist" aria-label="연령별 커리큘럼 트랙">
          {tracks.map((t, i) => (
            <button
              key={t.code}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              id={`track-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`track-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              className={['tracks__tab', active === i ? 'is-active' : ''].join(' ')}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
            >
              <span className="tracks__tab-code display-num">{t.code}</span>
              <span className="tracks__tab-grade">{t.grade}</span>
              <span className="tracks__tab-title">{t.title}</span>
            </button>
          ))}
        </div>

        <div
          className="tracks__panel"
          role="tabpanel"
          id={`track-panel-${active}`}
          aria-labelledby={`track-tab-${active}`}
          key={track.code}
        >
          <div className="tracks__panel-main">
            <p className="tracks__panel-grade">{track.grade} · {track.code}</p>
            <h3 className="tracks__panel-title">{track.title}</h3>
            <p className="tracks__panel-intro">{track.intro}</p>

            <h4 className="tracks__sub">이런 걸 배워요</h4>
            <ul className="tracks__goals">
              {track.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>

          <aside className="tracks__panel-side">
            <div className="tracks__meta">
              <span className="tracks__meta-label">사용 도구</span>
              <div className="tracks__tools">
                {track.tools.map((tool) => (
                  <span key={tool} className="tracks__tool">{tool}</span>
                ))}
              </div>
            </div>
            <div className="tracks__meta">
              <span className="tracks__meta-label">완성 작품</span>
              <p className="tracks__outcome">{track.outcome}</p>
            </div>
            <div className="tracks__meta">
              <span className="tracks__meta-label">수업 형태</span>
              <p className="tracks__format">{track.format}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
