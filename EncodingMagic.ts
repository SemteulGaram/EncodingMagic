import fs from 'fs'
import path from 'path'

import atob from 'atob'
import dotEnv from 'dotenv'
import iconvLite from 'iconv-lite'
import jsCharDet from 'jschardet'

import { textLimiter } from './src/utils/text-limiter'

dotEnv.config()
const fsp = fs.promises

async function main () {
  const origin: string = await fsp.readFile(path.join(process.cwd(), 'data/input.txt'), 'utf-8')
  console.log('origin:', textLimiter(origin, 60))
  const decode1: string = atob(origin)
  console.log('decode1:', textLimiter(decode1, 60))
  const detect = jsCharDet.detect(Buffer.from(decode1))

  console.log(detect)
}

main().then(() => {
  console.log('Process reach end')
}).catch(console.error)
