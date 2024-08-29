'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex justify-between items-center gap-3 border-zinc-300 dark:focus-within:border-violet-600 focus:border-violet-300 dark:border-zinc-700 dark:bg-zinc-800 shadow-sm px-3 py-2 border rounded-lg dark:focus-within:ring-violet-500/20 focus:ring-4 focus:ring-violet-100 w-full h-11 dark:data-[placeholder]:text-zinc-400 data-[placeholder]:text-zinc-600 outline-none">
        <SelectPrimitive.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          sideOffset={8}
          position="popper"
          className="z-10 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm border rounded-lg animate-slideDowndAndFade overflow-hidden w-[--radix-select-trigger-width]"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
