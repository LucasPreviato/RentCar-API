import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
// [x]definir o tipo de return
// [x]alterar o return de error
// [x]acessar o repository


class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };