import { useState, useEffect, useRef } from 'react';

interface SimulatedPurchase {
  id: string;
  name: string;
  timeAgo: string;
}

interface SimulatedLivePurchasesData {
  total: number;
  recent: SimulatedPurchase[];
  totalDeltaSinceMount: number;
}

// Pool of realistic buyer names
const BUYER_NAMES = [
  'Riya', 'Abdul', 'Priya', 'Rahul', 'Sneha', 'Arjun', 'Ananya', 'Vikram',
  'Neha', 'Rohan', 'Kavya', 'Aditya', 'Ishita', 'Karan', 'Pooja', 'Siddharth',
  'Meera', 'Aarav', 'Diya', 'Harsh', 'Tanvi', 'Ayush', 'Simran', 'Varun'
];

function getRandomName(): string {
  return BUYER_NAMES[Math.floor(Math.random() * BUYER_NAMES.length)];
}

/**
 * Client-side simulated live purchases hook that generates fake activity
 * without any backend calls. Updates automatically over time and tracks
 * increments since mount for scarcity badge calculation.
 */
export function useSimulatedLivePurchases(): SimulatedLivePurchasesData {
  // Start with a base count
  const [total, setTotal] = useState(1247);
  const [recent, setRecent] = useState<SimulatedPurchase[]>([]);
  const initialTotalRef = useRef(1247);
  const [deltaCount, setDeltaCount] = useState(0);

  // Initialize recent purchases on mount with names
  useEffect(() => {
    const initialPurchases: SimulatedPurchase[] = [
      { id: '1', name: getRandomName(), timeAgo: 'just now' },
      { id: '2', name: getRandomName(), timeAgo: '2 minutes ago' },
      { id: '3', name: getRandomName(), timeAgo: '5 minutes ago' },
      { id: '4', name: getRandomName(), timeAgo: '8 minutes ago' },
      { id: '5', name: getRandomName(), timeAgo: '12 minutes ago' },
    ];
    setRecent(initialPurchases);
  }, []);

  // Increment total counter periodically (every 8-15 seconds)
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setTotal((prev) => prev + 1);
      setDeltaCount((prev) => prev + 1);
    }, 8000 + Math.random() * 7000); // Random between 8-15 seconds

    return () => clearInterval(incrementInterval);
  }, []);

  // Add new "recent" purchase periodically (every 10-20 seconds)
  useEffect(() => {
    const addPurchaseInterval = setInterval(() => {
      setRecent((prev) => {
        const newPurchase: SimulatedPurchase = {
          id: `${Date.now()}_${Math.random()}`,
          name: getRandomName(),
          timeAgo: 'just now',
        };
        // Keep only last 10 purchases
        return [newPurchase, ...prev].slice(0, 10);
      });
    }, 10000 + Math.random() * 10000); // Random between 10-20 seconds

    return () => clearInterval(addPurchaseInterval);
  }, []);

  // Update time labels every 30 seconds
  useEffect(() => {
    const updateTimeInterval = setInterval(() => {
      setRecent((prev) =>
        prev.map((purchase, index) => {
          // Simulate aging of timestamps
          if (purchase.timeAgo === 'just now') {
            return { ...purchase, timeAgo: '2 minutes ago' };
          } else if (purchase.timeAgo === '2 minutes ago') {
            return { ...purchase, timeAgo: '5 minutes ago' };
          } else if (purchase.timeAgo === '5 minutes ago') {
            return { ...purchase, timeAgo: '8 minutes ago' };
          } else if (purchase.timeAgo === '8 minutes ago') {
            return { ...purchase, timeAgo: '12 minutes ago' };
          } else if (purchase.timeAgo === '12 minutes ago') {
            return { ...purchase, timeAgo: '15 minutes ago' };
          } else if (purchase.timeAgo === '15 minutes ago') {
            return { ...purchase, timeAgo: '20 minutes ago' };
          } else {
            return { ...purchase, timeAgo: '25 minutes ago' };
          }
        })
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(updateTimeInterval);
  }, []);

  return {
    total,
    recent,
    totalDeltaSinceMount: deltaCount,
  };
}
