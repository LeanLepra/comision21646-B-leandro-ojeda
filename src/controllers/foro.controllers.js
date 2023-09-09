import { ForoModel} from "../models/Foro.js";

export const ctrlGetForo = async (req, res) => {
    try {
        const foro = await ForoModel.findAll();
        if (!foro) return res.status(404)
        return res.status(200).json(foro)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message : 'Error Server'
        })        
    }
}

export const ctrlCreateForo = async (req, res) => {
    try {
        const newForo = await ForoModel.create(req.body)
        return res.status(201).json(newForo)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message : 'Error Server'
        }) 
    }
};

export const ctrlUpdateForo = async (req, res) => {
    const { id } = req.params
    try {
        const foro = await ForoModel.findByPk(id)
        if (!foro){
            return res.status(404).json({
                message: 'Post no encontrado'
            })
        }
        foro.update(req.body)
        return res.status(200).json(foro)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message : 'Error Server'
        }) 
    }
};

export const ctrlDeleteForo = async (req, res) => {
    const { id } = req.params
    try {
        const foroDeleted = await ForoModel.destroy({
            where: {
                id : id
            }
        })
        if(!foroDeleted){
            return res.status(404).json({
                message: 'Post no encontrado'
            })            
        }
        return res.status(200).json({
                message: 'Post eliminado'
            })    
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message : 'Error Server'
        }) 
        
    }
}

