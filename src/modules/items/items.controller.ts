import {itemsService} from "./items.service"
import { Request, Response } from "express"

const moduleAndApi = (module:string, api:string) => {console.log(`${module} => ${api}`)}

const sendResponse = (res: Response, status: number, message?: string, data?: any) => {
    const isError = status >=400;
    console.log(`${isError ? 'Error' : 'Éxito'} en ${res.req?.path}: ${message ?? 'Operación completada'}`);
    res.status(status).json({ message: message ?? 'Operación completada', data });
};


const handleRequest = (fn:(req:Request, res:Response) => Promise<any>) => {
    async (req:Request, res:Response) => {
        return fn(req,res).catch(error => sendResponse(res,500,String(error)))
    }
}


export class ItemsController {
    private service = new itemsService()

    create = handleRequest( async (req, res) => {
        moduleAndApi("Items","Create")
        const data = req.body
        res.status(201).json(await this.service.create(data.name,data.description))
    })

    getAll = handleRequest(async(req,res) => {
        moduleAndApi("Items","GetAll");
        res.status(200).json(await this.service.getAll)
    })

    getById = handleRequest(async (req,res) => {
        moduleAndApi("Items","GetById");
        const id:number = parseInt(req.params.id,10)
        res.status(200).json(await this.service.getById(id))
    })

    delete = handleRequest(async (req,res) => {
        moduleAndApi("Items","Delete");
        const id:number = parseInt(req.body.id)
        res.status(200).json(await this.service.delete(id))
    })

    update = handleRequest(async (req,res) => {
        moduleAndApi("Items","Update");
        const id:number = parseInt(req.params.id, 10)
        const data = req.body
        res.status(200).json(await this.service.update(id, data.name,data.description))
    })
}

