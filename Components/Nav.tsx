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
        className='stroke-[#070707] dark:stroke-[#dad7cd]'
        strokeWidth="1"
        transform={`rotate(${hourRotation} 9 9)`}
      />
      <line
        x1="9"
        y1="9"
        x2="9"
        y2="2"
        stroke="#3a0ca3"
        className='stroke-[#070707] dark:stroke-[#dad7cd]'
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

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkClick = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

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
    const ampm = hours >= 12 ? "pm" : "am";
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${twelveHour}:${formattedMinutes}${ampm}`;
  }
  return (
    <nav className='transition-colors duration-200 ease-in-out z-10 fixed top-0 lg:top-2 lg:right-4 bg-[inherit] dark:bg-[#161616] pr-2 lg:pl-2 lg:mt-0 lg:py-0 py-1'>
      <div className="flex items-center justify-around gap-2">
      <p
            className=" dark:text-neutral-200 hover:cursor-pointer min-w-[1.5rem]"
            onClick={handleDarkClick}
          >
            <span className="sr-only sr-only-focusable">
              Click to change colour theme
            </span>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="fill-[#dad7cd]"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                  className="fill-[#dad7cd]"
                ></path>{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="fill-[#070707]"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />{" "}
                <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />{" "}
              </svg>
            )}
          </p>
          
        <div className='flex gap-1'>Exam in:{" "}{countdownDisplay}{" "} days</div>
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