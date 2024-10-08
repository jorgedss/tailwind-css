'use client'
import { Logo } from './logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root
      className="flex p-4 data-[state=open]:bottom-0 
    lg:data-[state=closed]:bottom-0  flex-col border-b gap-6 border-r  border-zinc-200  top-0  fixed
    left-0 right-0 z-20 bg-white dark:bg-zinc-900 dark:border-zinc-800 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="text-zinc-500 h-5 w-5" />
          </Input.Prefix>
          <Input.Control placeholder=" Search" />
        </Input.Root>

        <nav className=" animate-slideDowndAndFade space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5 ">
            <NavItem title="Suport" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
