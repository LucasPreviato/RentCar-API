import { Router } from "express";
import  multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRouters = Router();
const upload = multer({
  dest:"./tmp",
});



//import route inside server
// Com o principios de SOLID essa route está fazendo mais do que deveria 
// route com  authenticated, created ...., não é responsabilidade dela.
categoriesRouters.post('/', (req, res) => {

  return createCategoryController.handle(req, res);

});

categoriesRouters.get('/', (req, res) => {

 return listCategoriesController.handle(req, res);
 
});

categoriesRouters.post('/import', upload.single("file") , (req, res)=>{
  return importCategoryController.handle(req, res);
});

export { categoriesRouters };