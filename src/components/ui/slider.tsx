"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  className?: string;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ value, onValueChange, min, max, step, className, ...props }, ref) => {
    const [isDragging, setIsDragging] = React.useState<number | null>(null);
    const sliderRef = React.useRef<HTMLDivElement>(null);

    const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

    const getValue = (percentage: number) => {
      const val = min + (percentage / 100) * (max - min);
      return Math.round(val / step) * step;
    };

    const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(index);
    };

    const handleMouseMove = React.useCallback(
      (e: MouseEvent) => {
        if (isDragging === null || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const percentage = Math.max(
          0,
          Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
        );
        const newValue = getValue(percentage);

        const newValues = [...value];
        newValues[isDragging] = newValue;

        // Ensure min <= max
        if (isDragging === 0 && newValue > value[1]) {
          newValues[1] = newValue;
        } else if (isDragging === 1 && newValue < value[0]) {
          newValues[0] = newValue;
        }

        onValueChange(newValues);
      },
      [isDragging, value, onValueChange, min, max, step]
    );

    const handleMouseUp = React.useCallback(() => {
      setIsDragging(null);
    }, []);

    React.useEffect(() => {
      if (isDragging !== null) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const handleTrackClick = (e: React.MouseEvent) => {
      if (!sliderRef.current || isDragging !== null) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      const newValue = getValue(percentage);

      // Find closest thumb
      const distanceToMin = Math.abs(newValue - value[0]);
      const distanceToMax = Math.abs(newValue - value[1]);
      const closestIndex = distanceToMin <= distanceToMax ? 0 : 1;

      const newValues = [...value];
      newValues[closestIndex] = newValue;

      // Ensure min <= max
      if (closestIndex === 0 && newValue > value[1]) {
        newValues[1] = newValue;
      } else if (closestIndex === 1 && newValue < value[0]) {
        newValues[0] = newValue;
      }

      onValueChange(newValues);
    };

    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        {/* Track */}
        <div
          ref={sliderRef}
          className="relative h-2 w-full cursor-pointer"
          onClick={handleTrackClick}
        >
          {/* Background track */}
          <div className="absolute h-2 w-full rounded-full bg-gray-200" />

          {/* Active track */}
          <div
            className="absolute h-2 rounded-full bg-blue-300"
            style={{
              left: `${getPercentage(value[0])}%`,
              width: `${getPercentage(value[1]) - getPercentage(value[0])}%`,
            }}
          />

          {/* Thumb 1 (Min) */}
          <div
            className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white shadow-md hover:border-blue-600 active:cursor-grabbing"
            style={{ left: `${getPercentage(value[0])}%` }}
            onMouseDown={handleMouseDown(0)}
          />

          {/* Thumb 2 (Max) */}
          <div
            className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-blue-500 bg-white shadow-md hover:border-blue-600 active:cursor-grabbing"
            style={{ left: `${getPercentage(value[1])}%` }}
            onMouseDown={handleMouseDown(1)}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
export type { SliderProps };
