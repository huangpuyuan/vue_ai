const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app = new Koa()
const router = new Router

// 注册 mock list
mockList.forEach(item => {
    const { url, method, response } = item
    router[method](url, async ctx => {
        const res = await response()
        ctx.body = res
    })
})

app.use(cors())
app.use(router.routes())
app.listen(3000) // http://localhost:3000
