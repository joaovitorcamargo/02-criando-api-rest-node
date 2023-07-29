import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PORT: z.number().default(8000),
  DATABASE_PASSWORD: z.string(),
  DATABASE_SCHEMA: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Ocorreu um erro', _env.error.format())

  throw new Error('Ocorreu um erro')
}

export const env = _env.data