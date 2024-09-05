import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2024-12-31T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Coming Soon</h1>
      <p style={styles.subtitle}>Our website is under construction. Stay tuned!</p>
      <div style={styles.countdown}>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.days}</span>
          <span style={styles.label}>Days</span>
        </div>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.hours}</span>
          <span style={styles.label}>Hours</span>
        </div>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.minutes}</span>
          <span style={styles.label}>Minutes</span>
        </div>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.seconds}</span>
          <span style={styles.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
  },
  timeBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 1rem',
  },
  time: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  label: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
  },
};

export default ComingSoon;