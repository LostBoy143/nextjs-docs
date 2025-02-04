"use client";
import {
  useRef,
  useEffect,
  useState,
} from "react";
import {
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";

interface AnimatedCounterProps {
  targetString: string;
}

export default function AnimatedCounter({
  targetString,
}: AnimatedCounterProps) {
  // Ensure targetString is defined, or provide a default value
  const safeTargetString = targetString || "0";
  const numericTarget =
    parseInt(
      safeTargetString.replace(/[^0-9]/g, ""),
      10
    ) || 0;
  const suffix = safeTargetString
    .replace(/[0-9,]/g, "")
    .trim();

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);

  // Adjust spring config if needed
  const springConfig =
    numericTarget > 1000
      ? { damping: 25, stiffness: 150 }
      : { damping: 15, stiffness: 100 };

  const springValue = useSpring(
    motionValue,
    springConfig
  );
  const [displayValue, setDisplayValue] =
    useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    const unsubscribe = springValue.on(
      "change",
      (latest) => {
        // Compute the new value and clamp it to not exceed numericTarget.
        let newValue = Math.min(
          Math.floor(latest),
          numericTarget
        );

        // Ensure the value is monotonic (never decreases).
        if (newValue < prevValueRef.current) {
          newValue = prevValueRef.current;
        }

        // Optionally, if the value is within 1 unit of the target, snap to target.
        if (numericTarget - newValue < 1) {
          newValue = numericTarget;
        }

        prevValueRef.current = newValue;
        setDisplayValue(newValue);
      }
    );
    return () => unsubscribe();
  }, [springValue, numericTarget]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericTarget);
    }
  }, [isInView, motionValue, numericTarget]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix && ` ${suffix}`}
    </span>
  );
}
