import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { subscriberData } from '../mockData';

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as { date: string; subs: number };
    return (
      <div
        style={{
          backgroundColor: '#1a1a2e',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          boxShadow: '0 0 12px rgba(0, 255, 255, 0.15)',
        }}
      >
        <p
          style={{
            margin: '0 0 4px',
            fontSize: '13px',
            color: '#aaa',
          }}
        >
          {data.date}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '700',
            color: '#00ffff',
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          {data.subs} подписчиков
        </p>
      </div>
    );
  }
  return null;
}

export function SubscriberChart() {
  const chartData = subscriberData.map((d) => ({
    ...d,
    dateShort: d.date.slice(5), // MM-DD
  }));

  return (
    <div
      style={{
        backgroundColor: '#12121a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 20, 147, 0.25)',
        boxShadow: '0 0 24px rgba(255, 20, 147, 0.15)',
        padding: '24px',
        width: '100%',
      }}
    >
      <h3
        style={{
          margin: '0 0 20px',
          fontSize: '18px',
          fontWeight: '600',
          color: '#ccc',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
        }}
      >
        Динамика подписчиков
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="dateShort"
            tick={{ fill: '#777', fontSize: 12 }}
            axisLine={{ stroke: '#333' }}
            tickLine={{ stroke: '#333' }}
          />
          <YAxis
            tick={{ fill: '#777', fontSize: 12 }}
            axisLine={{ stroke: '#333' }}
            tickLine={{ stroke: '#333' }}
          />
          <Tooltip content={CustomTooltip} />
          <Line
            type="monotone"
            dataKey="subs"
            stroke="#ff1493"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: '#00ffff',
              stroke: 'none',
              opacity: 1,
            }}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
