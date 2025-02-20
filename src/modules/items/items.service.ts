import {itemsRepository} from "./items.repository"

export class itemsService {
    private repo = new itemsRepository()

    getById = async(id:number) => {return await this.repo.findById(id)}

    getAll = async() => {return this.repo.findAll()}

    create = async(name:string, description:string) => {return await this.repo.create(name,description)}

    delete = async(id:number) => {return await this.repo.delete(id)}
    
    update = async(id:number, name:string, description:string) => {return await this.repo.update(id,name,description)}
}