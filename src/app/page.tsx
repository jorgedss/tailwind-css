import { SettingTabs } from '@/components/SettingTabs'

import * as Input from '@/components/Input'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 dark:text-zinc-300">
        Settings
      </h1>

      <SettingTabs />

      <div className="flex flex-col mt-6">
        <div className="flex flex-col justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 dark:text-zinc-300">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          action=""
          id="settings"
          className="w-full flex flex-col gap-5 mt-6 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid-cols-form lg:grid">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Jorge" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="José" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="exemplo@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <p className="mt-0.5 font-normal text-sm text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="pacific"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="br" text="America São Paulo (UTC-08:00)" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <p className="mt-0.5 font-normal text-sm text-zinc-500">
                Write a short introduction.
              </p>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="
            I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
            "
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid-cols-form lg:grid">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio projects
              <p className="mt-0.5 font-normal text-sm text-zinc-500">
                Share a few snippets of your work.
              </p>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex justify-end items-center gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
