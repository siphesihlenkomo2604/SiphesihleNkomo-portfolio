import { useReveal, useCountUp } from '@/lib/hooks';
import { metrics } from '@/lib/data';

function MetricItem({
  metric,
  visible,
  index,
}: {
  metric: (typeof metrics)[number];
  visible: boolean;
  index: number;
}) {
  const count = useCountUp(metric.value, 2000, visible);
  const displayValue =
    'display' in metric && metric.display
      ? metric.display
      : `${metric.prefix}${Number.isInteger(metric.value) ? count.toFixed(0) : count.toFixed(1)}${metric.suffix}`;

  return (
    <div
      className="flex-1 text-center px-4 py-8 animate-fade-up group cursor-default"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-nude-400 dark:text-rose-400 mb-1 group-hover:text-nude-300 dark:group-hover:text-rose-300 group-hover:scale-105 transition-all duration-500">
        {displayValue}
      </div>
      <div className="text-xs sm:text-sm text-nude-600/60 dark:text-rose-300/60 font-medium tracking-wide">
        {metric.label}
      </div>
    </div>
  );
}

export default function MetricsBanner() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-12 px-6">
      <div
        ref={ref}
        className="max-w-6xl mx-auto card-nude dark:card-rose shadow-soft-lg overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-nude-400/10 dark:divide-rose-400/10">
          {metrics.map((m, i) => (
            <MetricItem key={m.label} metric={m} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
