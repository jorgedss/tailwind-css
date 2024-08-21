import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input {...props} type="file" className="sr-only" id="photo" />
}
