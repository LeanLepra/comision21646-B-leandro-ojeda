import { Router } from "express";
import { ctrlCreateForo, ctrlDeleteForo, ctrlGetForo, ctrlUpdateForo } from "../controllers/foro.controllers.js";
import { createForoSchema, editForoSchema } from "../models/schemas/foro.schema.js";
import { validator } from "../middlewares/validator.js"
import { ForoModel } from "../models/Foro.js";

const foroRouter = Router();

foroRouter.get('/api/foro', ctrlGetForo);

foroRouter.post('/api/foro', createForoSchema, validator, ctrlCreateForo);

foroRouter.put('/api/foro/:id', editForoSchema, validator, ctrlUpdateForo);

foroRouter.delete('/api/foro/:id',ctrlDeleteForo);

export { foroRouter }