import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // ms per letter
  className?: string;
  cursor?: boolean;
}

export default function TypingText({
  text,
  speed = 80,
  className = "",
  cursor = true,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
}
