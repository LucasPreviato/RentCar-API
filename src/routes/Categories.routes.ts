import { Router } from "express";

import {CategoriesRepository} from "../modules/cars/repositories/CategoriesRepository"
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";


const categoriesRouters = Router();

const categoriesRepository = new CategoriesRepository();



//import route inside server
// Com o principios de SOLID essa route está fazendo mais do que deveria 
// route com  authenticated, created ...., não é responsabilidade dela.
categoriesRouters.post('/', (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();

})

categoriesRouters.get('/', (req, res) => {
  const all = categoriesRepository.list();
  return res.json(all);
})

export { categoriesRouters }