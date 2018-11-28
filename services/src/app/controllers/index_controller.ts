import * as express from "express";

export function get (_req: express.Request, res: express.Response) {
    res.render('index', { title: 'R6 Node services' });
}



