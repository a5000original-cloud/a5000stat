import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string | number;
  delta?: number;
  accent?: 'pink' | 'cyan' | 'gold';
}

const accentColors = {
  pink: {
    glow: 'rgba(255, 20, 147, 0.4)',
    border: 'rgba(255, 20, 147, 0.3)',
    accent: '#ff1493',
  },
  cyan: {
    glow: 'rgba(0, 255, 255, 0.4)',
    border: 'rgba(0, 255, 255, 0.3)',
    accent: '#00ffff',
  },
  gold: {
    glow: 'rgba(255, 215, 0, 0.4)',
    border: 'rgba(255, 215, 0, 0.3)',
    accent: '#ffd700',
  },
};

const defaultAccent = accentColors.pink;

export function StatCard({ title, value, delta, accent = 'pink' }: StatCardProps) {
  const colors = accentColors[accent] || defaultAccent;

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#12121a',
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    boxShadow: `0 0 20px ${colors.glow}, 0 4px 6px rgba(0, 0, 0, 0.3)`,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    minWidth: '220px',
    flex: '1 1 220px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    margin: 0,
  };

  const valueStyle: React.CSSProperties = {
    fontSize: '42px',
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: "'Bebas Neue', sans-serif",
    lineHeight: '1.1',
    margin: 0,
  };

  const deltaPositive = delta !== undefined && delta >= 0;
  const deltaValue = Math.abs(delta ?? 0);

  return (
    <div style={cardStyle}>
      <p style={titleStyle}>{title}</p>
      <p style={valueStyle}>{value}</p>
      {delta !== undefined && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '4px',
          }}
        >
          {deltaPositive ? (
            <ArrowUp size={16} color="#22c55e" />
          ) : (
            <ArrowDown size={16} color="#ef4444" />
          )}
          <span
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: deltaPositive ? '#22c55e' : '#ef4444',
            }}
          >
            {deltaPositive ? '+' : '-'}{deltaValue}%
          </span>
        </div>
      )}
    </div>
  );
}
