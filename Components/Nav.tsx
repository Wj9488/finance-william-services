"use client"

import React from 'react'
import {useState, useEffect} from "react"

type TimeLeft = {
  days: number;
} | null;

const Clock: React.FC<{ hours: number; minutes: number }> = ({
  hours,
  minutes,
}) => {
  const hourRotation = 30 * hours + 0.5 * minutes; // 30 degrees per hour + 0.5 degrees per minute
  const minuteRotation = 6 * minutes; // 6 degrees per minute

  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      {/* <circle
        cx="9"
        cy="9"
        r="8.5"
        fill="none"
        stroke="black"
        strokeWidth="0.5"
      /> */}
      <line
        x1="9"
        y1="9"
        x2="9"
        y2="4"
        stroke="#3a0ca3"
        strokeWidth="1"
        transform={`rotate(${hourRotation} 9 9)`}
      />
      <line
        x1="9"
        y1="9"
        x2="9"
        y2="2"
        stroke="#3a0ca3"
        strokeWidth="1"
        transform={`rotate(${minuteRotation} 9 9)`}
      />
    </svg>
  );
};

const calculateTimeTillExam = (): TimeLeft => {
  const difference = +new Date('2024-01-12') - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
  }

  return null;
};

const Nav = () => {
  const [GBtime, setGBTime] = useState(getCurrentTime("en-GB"));
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeTillExam());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeTillExam());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGBTime(getCurrentTime("en-GB"));
    }, 1000); // Update every second

    // clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const countdownDisplay = timeLeft ? (
    <div>
      {timeLeft.days}
    </div>
  ) : (
    <div>0</div>
  );
  function getCurrentTime(locale: string) {
    const date = new Date();
    if (locale === "fr-FR") {
      date.setHours(date.getHours() + 1); // Adjust for French time
    }
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${twelveHour}:${formattedMinutes}${ampm}`;
  }
  return (
    <nav className='fixed lg:top-2 lg:right-4 bg-[#fafafa] mt-2 lg:mt-0 lg:py-0 py-1'>
      <div className="flex items-center justify-around gap-2">
        <div className='flex gap-1'>EXAM IN:{" "}{countdownDisplay}{" "} DAYS</div>
          <Clock
            hours={new Date().getHours()}
            minutes={new Date().getMinutes()}
          />
          <p className="">
            <span className="">
            {GBtime} 
            </span>
          </p>
      </div>
    </nav>
  )
}

export default Nav