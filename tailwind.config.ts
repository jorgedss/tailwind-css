import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },
    },
  },
  plugins: [],
}
export default config
