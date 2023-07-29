import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/create', async () => {
  const transactions = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Meu Primeiro titulo',

      amount: 1000,
    })
    .returning('*')

  return transactions
})

app.get('/select', async () => {
  const transactions = await knex('transactions').select('*')

  return {
    data: transactions,
    count_result: transactions.length,
  }
})

app
  .listen({
    port: 8000,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
