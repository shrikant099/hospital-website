"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    // icon: "🗺️",
    end: 5,
    suffix: "+",
    label: "Cities Served",
    sublabel: "Delhi NCR & growing",
  },
  {
    // icon: "🩺",
    end: 98,
    suffix: "%",
    label: "Certified Professionals",
    sublabel: "MBBS, MD & GP verified",
  },
  {
    // icon: "🕐",
    end: 24,
    suffix: "/7",
    label: "Support",
    sublabel: "Including emergencies & holidays",
  },
  {
    // icon: "🧪",
    end: 100,
    suffix: "%",
    label: "NABL Certified Labs",
    sublabel: "Trusted diagnostic partners",
  },
];

function Counter({ end, suffix, started }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      else setCount(end);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, end]);

  return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white border-y border-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <p className="text-center text-xs font-semibold tracking-widest text-blue-600 uppercase mb-8">
          Trusted by thousands across Delhi NCR
        </p>

        {/* Stats grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center justify-center text-center
                px-4 py-8
                ${i < 2 ? "border-b md:border-b-0" : ""}
                ${i % 2 === 0 ? "border-r" : ""}
                md:border-r md:last:border-r-0
                border-gray-100
              `}
            >
              {/* Icon */}
              {/* <div className="text-3xl mb-3">{stat.icon}</div> */}

              {/* Animated Number */}
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tabular-nums leading-none">
                <Counter end={stat.end} suffix={stat.suffix} started={started} />
              </div>

              {/* Label */}
              <p className="text-sm sm:text-base font-semibold text-gray-800 mt-2">
                {stat.label}
              </p>

              {/* Sublabel */}
              <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}