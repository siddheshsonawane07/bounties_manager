import React, { useEffect, useState } from "react";

const Countdown = ({ targetTimestamp }) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Math.floor(Date.now() / 1000); // Current epoch timestamp
      const remainingTime = targetTimestamp - now;

      if (remainingTime <= 0) {
        setCountdown("Countdown expired");
        clearInterval(intervalId);
      } else {
        const days = Math.floor(remainingTime / 86400);
        const hours = Math.floor((remainingTime % 86400) / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        setCountdown(
          `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
        );
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [targetTimestamp]);

  return <div>{countdown}</div>;
};

export default Countdown;
