import { Request, Response, NextFunction } from "express";
import _ from "lodash";

export function isNumberMW(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    if (id == null || !_.isNumber(id)) {
        res.status(400).send(`The id is invalid ${req.params.id}`);
        return;
    }
    next();
}

export function isNotNullMW(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
        res.status(400).send("Body is null");
        return;
    }
    next();
}

export function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`Server got request ${req.method} ${req.url}`);
    next();
}