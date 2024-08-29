import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'div'>

// InputPrefixProps recebe todas as propriedades de uma div

export function Prefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="outline-none flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-100"
      {...props}
    />
  )
}
type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex  w-full items-center gap-2 rounded-lg border  border-zinc-300 px-3 py-2 shadow-sm ',
        ' focus-within:border-violet-300  focus-within:ring-violet-100  focus-within:ring-4',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-600 dark:focus-within:ring-violet-500/10 ',
        props.className,
      )}
      {...props}
    />
  )
}
