import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/////////////////////////////////////////////////
// 加入 CORS 功能 => 跨域资源共享
import cors from 'cors'
//app.use(cors()) // 全部API访问许可, https://github.com/expressjs/cors

// 仅 https://api.deeplearnaws.com 可用
var corsOptions = {
    origin: 'https://api.deeplearnaws.com',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

/////////////////////////////////////////////////
// 服务开始

app.listen(3000, () => {
    console.log("Start on port 3000.")
})
app.get('/', (req: express.Request, res: express.Response) => {
    res.send({
        result: "ok"
    })
})