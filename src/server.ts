import express from 'express';
import { categoriesRouters } from './routes/Categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouters);
app.use("/specifications", specificationsRoutes);






app.listen(3333, () => console.log('Server listening on'));