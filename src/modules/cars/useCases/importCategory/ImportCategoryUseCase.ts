//conceito stream para leitura de arquivos por partes
import fs from "fs";
// Node Native - file system
import {parse} from "csv-parse";

class ImportCategoryUseCase{

  execute(file : Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    const parseFile = parse();


    stream.pipe(parseFile);
    parseFile.on("data", async (line)=>{
      console.log(line);
    })
  }

}

export {ImportCategoryUseCase};