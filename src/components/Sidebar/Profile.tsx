import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="http://github.com/jorgedss.png"
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Jorge Souza
        </span>
        <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
          jorgesouza621@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="w-5 h-5" />
      </Button>
    </div>
  )
}
