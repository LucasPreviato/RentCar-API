import { ISpecificationsReposity } from "../repositories/ISpecificationsReposity";


interface IRequest {
  name : string;
  description : string;
}

class CreateSpecificationService{

constructor(private specificationsRepository : ISpecificationsReposity){}

  execute({name,description}:IRequest) : void {
    const specificationsAlreadyExists = this.specificationsRepository.findByName(name);
    if(specificationsAlreadyExists){
      throw new Error("Specification Already exists!");
    }

    
    this.specificationsRepository.create({
      name,
      description,
    });
  }

}

export { CreateSpecificationService }