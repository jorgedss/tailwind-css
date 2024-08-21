'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { UseFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = UseFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files)
  }
  return (
    <input
      {...props}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      id={id}
    />
  )
}
