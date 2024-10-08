'use client'

import { User } from 'lucide-react'
import { UseFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = UseFileInput()

  const PreviewUrl = useMemo(() => {
    if (files.length === 0) {
      return null
    }
    return URL.createObjectURL(files[0])
  }, [files])

  if (PreviewUrl === null) {
    return (
      <div className="bg-violet-50 dark:bg-violet-500/10 flex h-16 w-16 items-center justify-center rounded-full">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={PreviewUrl}
        alt="Imagem de perfil"
        className="h-16 w-16  rounded-full object-cover"
      />
    )
  }
}
