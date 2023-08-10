import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// Handler Global sem contexto pegando tudo
// app.addHook('preHandler', checkSessionIdExists)

app.register(transactionsRoutes, { prefix: '/transactions' })
