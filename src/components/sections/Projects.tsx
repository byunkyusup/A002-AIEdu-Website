import { projects } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import './projects.css';

export function Projects() {
  return (
    <section className="section section--sunken projects" id="projects" aria-labelledby="projects-heading">
      <div className="grid">
        <header className="projects__head">
          <p className="kicker">PROJECTS · 학생 작품</p>
          <h2 id="projects-heading" className="projects__title">
            아이들이 직접 만든<br />
            <span className="projects__title-em">진짜 작동하는</span> 작품들
          </h2>
          <p className="projects__lead">
            배운 내용은 매 과정 끝에 "내 작품"으로 완성됩니다. 아래는 트랙별 대표
            결과물 예시입니다.
          </p>
        </header>

        <ul className="projects__grid">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.idx} index={i % 3} className="project-card">
              <div className="project-card__top">
                <span className="project-card__idx display-num">{p.idx}</span>
                <span className="project-card__grade">{p.grade}</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <span className="project-card__tool">{p.tool}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
