import express, { Express, Request, Response, NextFunction } from 'express'

// 导入task路由
import tasksRoutes from './routes/tasks';

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/////////////////////////////////////////////////
// 错误处理
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    res.status(500).json({
        result: 'fail'
    })
})

/////////////////////////////////////////////////
// 服务开始
app.listen(3000, () => {
    console.log("Start on port 3000.")
})
app.get('/', (req: Request, res: Response) => {
    res.json({
        result: "ok"
    })
})
// 应用路由
app.use('/tasks', tasksRoutes);