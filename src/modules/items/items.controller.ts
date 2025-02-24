import { itemsService } from "./items.service";
import { Request, Response } from "express";

const logAndRespond = (res: Response, status: number, data?: any, message?: string) => {
    console.log(`${status >= 400 ? '❌' : '✅'} [ ${res.req?.path} ] ${message ?? 'Operación completada'}`);
    res.status(status).json(data ?? { message: message ?? 'Operación completada' });
};

const handleRequest = (fn: (req: Request, res: Response) => Promise<any>) => 
    async (req: Request, res: Response) => fn(req, res).catch(error => logAndRespond(res, 500, null, String(error)));

export class ItemsController {
    private service = new itemsService();

    create = handleRequest(async (req, res) => 
        logAndRespond(res, 201, await this.service.create(req.body.name, req.body.description))
    );

    getAll = handleRequest(async (req, res) => 
        logAndRespond(res, 200, await this.service.getAll())
    );

    getById = handleRequest(async (req, res) => {
        const id = parseInt(req.params.id, 10)
        logAndRespond(res, 200, await this.service.getById(id))
    });

    delete = handleRequest(async (req, res) => {
        const id = parseInt(req.params.id, 10)
        return logAndRespond(res, 200, await this.service.delete(id))
    });

    update = handleRequest(async (req, res) => {
        const id = parseInt(req.params.id, 10)
        return logAndRespond(res, 200, await this.service.update(id, req.body.name, req.body.description))
    });
}
