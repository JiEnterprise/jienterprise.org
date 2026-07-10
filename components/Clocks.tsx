'use client';

import { useEffect, useState } from 'react';

const CITIES = [
  { label: 'New York', tz: 'America/New_York' },
  { label: 'New Delhi', tz: 'Asia/Kolkata' },
];

function timeIn(tz: string, now: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now);
}

/** Two live clocks — the group's two markets, nine and a half hours apart. */
export default function Clocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const tick = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className="clocks">
      {CITIES.map((city) => (
        <div key={city.tz}>
          <span className="eyebrow">{city.label}</span>
          <div className="clock-time" suppressHydrationWarning>
            {now ? timeIn(city.tz, now) : '––:––:––'}
          </div>
        </div>
      ))}
    </div>
  );
}
