import { StatCard } from './components/StatCard';
import { SubscriberChart } from './components/SubscriberChart';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a12', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontSize: '72px',
              margin: 0,
              fontFamily: "'Bebas Neue', sans-serif",
              color: '#ffffff',
              textShadow:
                '0 0 10px rgba(255, 20, 147, 0.8), 0 0 30px rgba(255, 20, 147, 0.5), 0 0 60px rgba(255, 20, 147, 0.3)',
              letterSpacing: '3px',
              lineHeight: '1',
            }}
          >
            A5000Stat
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: '#888',
              margin: '8px 0 0',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            Null Null Null Music
          </p>
        </header>

        {/* Stat Cards */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}
        >
          <StatCard title="Всего подписчиков" value={1200} delta={5} accent="pink" />
          <StatCard title="Прирост за сегодня" value={34} delta={12} accent="cyan" />
          <StatCard title="Индекс величия" value={847} delta={3} accent="gold" />
        </div>

        {/* Chart */}
        <SubscriberChart />
      </div>
    </div>
  );
}

export default App;
