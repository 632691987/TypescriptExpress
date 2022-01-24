import { Request, Response, NextFunction } from 'express'

export const getTask = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        title: "吃饭",
        date: "20220101",
        finished: false,
    })
}

export const createTask = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        result: `建立一个任务`,
        method: req.method,
    })
}

export const updateTask = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        result: `更新一个任务`,
        taskid: req.params.id,
        method: req.method,
    })
}

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        result: `删除一个任务`,
        taskid: req.params.id,
        method: req.method,
    })
}