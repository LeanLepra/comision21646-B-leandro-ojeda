import { Router } from "express";
import { ctrlCreateForo, ctrlDeleteForo, ctrlGetForo, ctrlUpdateForo } from "../controllers/foro.controllers.js";

const foroRouter = Router();

foroRouter.get('/api/foro', ctrlGetForo);

foroRouter.post('/api/foro', ctrlCreateForo);

foroRouter.put('/api/:id',ctrlUpdateForo);

foroRouter.delete('/api/:id',ctrlDeleteForo);

export { foroRouter }