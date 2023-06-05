import {rest} from 'msw'
import {mockData} from './mockData'

export const handlers = [
  rest.get('/api/product-list', (req, res, ctx) => {
    const random = Math.floor(Math.random() * 10)

    if (random === 1) {
      return res(ctx.status(500), ctx.json({error: 'Internal Server Error'}))
    } else {
      return res(ctx.status(200), ctx.json(mockData))
    }
  })
]
