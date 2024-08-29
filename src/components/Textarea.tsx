import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="border-zinc-300 focus:border-violet-300 dark:focus-within:border-violet-600 dark:border-zinc-700 dark:bg-zinc-800 shadow-sm px-3 py-2 border rounded-lg focus:ring-4 focus:ring-violet-100 dark:focus-within:ring-violet-500/20 w-full min-h-[120px] outline-none resize-y dark:placeholder-zinc-400 dark:text-zinc-100"
      {...props}
    />
  )
}
