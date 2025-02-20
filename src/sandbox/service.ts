import {itemsService} from "../modules/items/items.service"

const service = new itemsService()

const getall = async() => {
    const result = await service.getAll()
    console.log(result)
}

const getBYId = async(id:number) => {
    const result = await service.getById(id)
    console.log(result)
}

const create = async(name:string,description:string) => {
    await service.create(name,description)
} 

const deletes = async(id:number) => {
    await service.delete(id)
}

const updates = async(id:number, name:string,description:string) => {
    const result = await service.update(id,name,description)
    console.log("Update")
    
}



//==========================================

//getall()
//getBYId(10)
//create("holiwis","jacinto")
//updates(15,"juas juas","kjfakd")
//deletes(15)

