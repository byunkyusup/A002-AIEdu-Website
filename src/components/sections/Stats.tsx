import { stats, type Stat } from '../../data/content';
import { useCountUp } from '../../hooks/useCountUp';
import './stats.css';

function StatItem({ stat }: { stat: Stat }) {
  const { value, ref } = useCountUp(stat.value);
  return (
    <div className="stat">
      <div className="stat__value display-num">
        <span ref={ref}>{value.toLocaleString('ko-KR')}</span>
        <span className="stat__suffix">{stat.suffix}</span>
      </div>
      <div className="stat__label">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="section section--ink stats" aria-label="주요 지표">
      <div className="grid stats__grid">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
