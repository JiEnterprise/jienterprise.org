'use client';

import { useEffect, useState } from 'react';

function nyTime(now: Date): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(now);
  } catch {
    return now.toLocaleTimeString();
  }
}

export default function Topbar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const tick = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className="topbar">
      <div className="wrap">
        <span>
          <span className="dot" />A diversified holding company
        </span>
        <span className="hide-m" suppressHydrationWarning>
          New York — {now ? nyTime(now) : '--:--:--'} ET
        </span>
      </div>
    </div>
  );
}
