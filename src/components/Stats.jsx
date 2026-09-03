import {
  useEffect,
  useRef,
  useState,
} from "react";

const stats = [
  {
    number: 30,
    suffix: "+",
    label: "LeetCode Problems",
  },
  {
    number: 10,
    suffix: "+",
    label: "Projects",
  },
  {
    number: 10,
    suffix: "+",
    label: "Technologies Used",
  },
  {
    number: 3,
    suffix: "+",
    label: "Years Coding",
  },
];

function Stats() {
  const [startAnimation, setStartAnimation] =
    useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.3,
        }
      );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="stats-section"
      ref={statsRef}
    >
      <div className="container">

        <div className="stats-grid">

          {stats.map((stat) => (

            <div
              className="stat-item"
              key={stat.label}
            >

              <div className="stat-number">
                {startAnimation
                  ? stat.number
                  : 0}

                <span>
                  {stat.suffix}
                </span>
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;