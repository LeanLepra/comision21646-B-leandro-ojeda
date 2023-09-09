import { body } from "express-validator";

export const createForoSchema = [
    body('title')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
    body('content')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
    body('image')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacío'),
]

