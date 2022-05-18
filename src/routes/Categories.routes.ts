import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";


const categoriesRouters = Router();




//import route inside server
// Com o principios de SOLID essa route está fazendo mais do que deveria 
// route com  authenticated, created ...., não é responsabilidade dela.
categoriesRouters.post('/', (req, res) => {

  return createCategoryController.handle(req, res);

})

categoriesRouters.get('/', (req, res) => {

 return listCategoriesController.handle(req, res);
 
})

export { categoriesRouters }