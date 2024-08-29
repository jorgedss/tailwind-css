'use client'
import { UploadCloud } from 'lucide-react'
import { UseFileInput } from './Root'

export function Trigger() {
  const { id } = UseFileInput()
  return (
    <label
      htmlFor={id}
      className="flex flex-col flex-1 items-center gap-3 px-6 py-4 text-center text-zinc-500 rounded-lg border border-zinc-300 shadow-sm cursor-pointer group dark:border-zinc-800 dark:hover:text-violet-300 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 hover:bg-violet-25 hover:text-violet-500 hover:border-violet-200"
    >
      <div className="border-6 p-2 bg-zinc-100 rounded-full border-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:group-hover:bg-zinc-700 dark:group-hover:border-zinc-600 group-hover:bg-violet-100 group-hover:border-violet-50">
        <UploadCloud className="text-zinc-600 dark:text-zinc-500 dark:group-hover:text-violet-300 group-hover:text-violet-700" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
