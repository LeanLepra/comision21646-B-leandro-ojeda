import { Router } from "express";
import { ctrlCreateForo, ctrlDeleteForo, ctrlGetForo, ctrlUpdateForo } from "../controllers/foro.controllers.js";
import { createForoSchema } from "../models/schemas/foro.schema.js";
import { validator } from "../middlewares/validator.js"

const foroRouter = Router();

foroRouter.get('/api/foro', ctrlGetForo);

foroRouter.post('/api/foro', ctrlCreateForo);

foroRouter.put('/api/foro/:id',ctrlUpdateForo);

foroRouter.delete('/api/foro/:id',ctrlDeleteForo);

export { foroRouter }