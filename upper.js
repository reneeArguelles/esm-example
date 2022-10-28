import { fileURLToPath } from 'node:url'

const isMain = () => process.argv[1] === fileURLToPath(import.meta.url)

export const upper = (str) => str.toUpperCase()
export const lower = (str) => str.toLowerCase()

if (isMain()) {
  const [,, str] = process.argv
  if (str === undefined) {
    console.log('Missing arg')
    process.exit(1)
  }
  console.log(upper(str))
}
