export interface SubscriberDatum {
  date: string;
  subs: number;
}

function generateSubscriberData(): SubscriberDatum[] {
  const data: SubscriberDatum[] = [];
  const startDate = new Date(2025, 9, 15); // October 15, 2025
  const targetSubs = 1200;
  const startSubs = 450;
  const totalDays = 30;

  // Small random-like fluctuations (deterministic pseudo-random)
  const fluctuations = [
    12, -8, 15, -3, 22, -18, 7, 30, -12, 5,
    -25, 18, 9, -14, 28, -6, 11, -20, 16, 3,
    -9, 24, -15, 8, 19, -11, 14, -7, 21, -4,
  ];

  const dailyGrowth = (targetSubs - startSubs) / (totalDays - 1);

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    const baseValue = startSubs + dailyGrowth * i;
    const value = Math.round(baseValue + fluctuations[i]);

    data.push({ date: dateStr, subs: value });
  }

  return data;
}

export const subscriberData: SubscriberDatum[] = generateSubscriberData();
