import { useEffect, useRef } from 'react';

/**
 * 요소가 뷰포트에 들어오면 `is-revealed` 클래스를 붙여 스크롤 리빌을 트리거한다.
 * IntersectionObserver 기반 — 스크롤 핸들러 churn 없음. reduced-motion은 global.css가 처리.
 * threshold/rootMargin은 원시값으로 받아 effect가 매 렌더마다 재실행되지 않도록 한다.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.16,
  rootMargin = '0px 0px -10% 0px',
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
