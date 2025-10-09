"use client";

import Countdown from "react-countdown";

function CountDownClock() {
  const endingDate = new Date("2025-12-31T23:59:59");

  return (
    <Countdown
      date={endingDate}
      className="text-amber-500 font-bold text-4xl xl:text-5xl"
    />
  ); //call the countdown library and We pass the target date (endingDate) to the Countdown component.
}

export default CountDownClock;

// ------------------------------
// WITHOUT A LIBRARY
// "use client";
// import React, { useState, useEffect } from "react";

// const CountDownClock = () => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date("2025-10-10T00:00:00") - +new Date();
//     let timeLeft = {
//       d: 0,
//       h: 0,
//       m: 0,
//       s: 0,
//     };

//     if (difference > 0) {
//       timeLeft = {
//         d: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         h: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         m: Math.floor((difference / 1000 / 60) % 60),
//         s: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <span className="font-bold text-5xl text-yellow-300">
//       {timeLeft.d}:{timeLeft.h}:{timeLeft.m}:{timeLeft.s}
//     </span>
//   );
// };

// export default CountDownClock;
