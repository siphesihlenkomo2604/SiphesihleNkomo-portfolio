import { useState } from 'react';
import { Users, DollarSign, TrendingUp, Clock } from 'lucide-react';

const AVG_PRICE = 180;
const HOURS_PER_APPT = 0.75;
const WEEKS = 4;

export default function BICalculator() {
  const [appointments, setAppointments] = useState(30);

  const monthlyRevenue = appointments * AVG_PRICE * WEEKS;
  const hoursSpent = appointments * HOURS_PER_APPT * WEEKS;
  const revenuePerHour = hoursSpent > 0 ? monthlyRevenue / hoursSpent : 0;
  const efficiency = Math.min((appointments / 50) * 100, 100);

  const stats = [
    {
      icon: DollarSign,
      label: 'Est. Monthly Revenue',
      value: `R ${monthlyRevenue.toLocaleString('en-ZA', { maximumFractionDigits: 0 })}`,
    },
    {
      icon: Clock,
      label: 'Hours Booked / Month',
      value: `${hoursSpent.toFixed(1)} hrs`,
    },
    {
      icon: TrendingUp,
      label: 'Revenue per Hour',
      value: `R ${revenuePerHour.toFixed(0)}`,
    },
    {
      icon: Users,
      label: 'Clients / Month',
      value: `${appointments * WEEKS}`,
    },
  ];

  return (
    <div className="mt-6 p-5 rounded-xl border border-nude-400/20 bg-nude-50/60 dark:bg-rose-200/30">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-nude-400 dark:text-rose-400" />
        <h5 className="font-serif text-sm font-semibold text-nude-600 dark:text-rose-300">
          Live ROI / Pricing Estimator
        </h5>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-medium text-nude-600/70 dark:text-rose-300/70">
            Appointments per week
          </label>
          <span className="text-sm font-bold text-nude-400 dark:text-rose-400">
            {appointments}
          </span>
        </div>
        <input
          type="range"
          min="5"
          max="50"
          value={appointments}
          onChange={(e) => setAppointments(Number(e.target.value))}
          className="w-full"
          style={{
            background: `linear-gradient(to right, #D4AF37 ${(appointments - 5) / 45 * 100}%, rgba(212,175,55,0.2) ${(appointments - 5) / 45 * 100}%)`,
          }}
        />
        <div className="flex justify-between text-[10px] text-nude-600/40 dark:text-rose-300/40 mt-1">
          <span>5</span>
          <span>50</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="p-3 rounded-lg bg-nude-100/60 dark:bg-rose-100/60 border border-nude-400/10 dark:border-rose-400/10"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon className="w-3 h-3 text-nude-400 dark:text-rose-400" />
                <span className="text-[10px] text-nude-600/50 dark:text-rose-300/50 font-medium">
                  {s.label}
                </span>
              </div>
              <div className="text-sm font-bold text-nude-600 dark:text-rose-300 tabular-nums">
                {s.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Efficiency bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-nude-600/50 dark:text-rose-300/50 font-medium">
            Capacity Utilisation
          </span>
          <span className="text-[10px] font-bold text-nude-400 dark:text-rose-400">
            {efficiency.toFixed(0)}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-nude-400/15 dark:bg-rose-400/15 overflow-hidden">
          <div
            className="h-full rounded-full bg-nude-400 dark:bg-rose-400 transition-all duration-500"
            style={{ width: `${efficiency}%` }}
          />
        </div>
      </div>

      <p className="text-[10px] text-nude-600/40 dark:text-rose-300/40 mt-3 italic">
        * Sample figures based on an average service price of R{AVG_PRICE} and {HOURS_PER_APPT}h per appointment.
      </p>
    </div>
  );
}
