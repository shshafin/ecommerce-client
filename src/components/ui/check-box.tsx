"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CustomCheckboxProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  name?: string
}

const CustomCheckbox = React.forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ id, checked, defaultChecked, onCheckedChange, disabled, className, name, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false)

    // Use controlled or uncontrolled state
    const checkedValue = checked !== undefined ? checked : isChecked

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked

      if (checked === undefined) {
        setIsChecked(newChecked)
      }

      onCheckedChange?.(newChecked)
    }

    return (
      <div className="relative inline-flex items-center">
        {/* Hidden native checkbox for accessibility */}
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          checked={checkedValue}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />

        {/* Custom checkbox visual */}
        <div
          className={cn(
            "h-5 w-5 shrink-0 rounded border-2 border-gray-300 bg-white cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center",
            checkedValue && "bg-blue-500 border-blue-500",
            !disabled && "hover:border-blue-400",
            disabled && "cursor-not-allowed opacity-50",
            "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
            className,
          )}
          onClick={() => {
            if (!disabled) {
              const newChecked = !checkedValue
              if (checked === undefined) {
                setIsChecked(newChecked)
              }
              onCheckedChange?.(newChecked)
            }
          }}
        >
          {/* Checkmark */}
          {checkedValue && (
            <Check
              className={cn(
                "h-3 w-3 text-white stroke-[3] transition-opacity duration-150",
                checkedValue ? "opacity-100" : "opacity-0",
              )}
            />
          )}
        </div>
      </div>
    )
  },
)

CustomCheckbox.displayName = "CustomCheckbox"

export { CustomCheckbox }
export type { CustomCheckboxProps }
