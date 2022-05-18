import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
  name : string;
  description : string;

}


interface ISpecificationsReposity{
  create({name,description} : ICreateSpecificationDTO) : void;
  findByName(name : string): Specification;

}

export { ISpecificationsReposity, ICreateSpecificationDTO};