import { ForoModel} from "../models/Foro.js";


export const ctrlView = async (req, res) => {
    try {
        const viewForo = await ForoModel.findAll();
        res.render('foro.ejs', {viewForo});
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message : 'Error Server'
        })        
    }
}

export const ctrlGetForo = async (req, res) => {
    try {
        const getForo = await ForoModel.findAll();
        if (!getForo) return res.status(404)
        return res.status(200).json(getForo)

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
        const upForo = await ForoModel.findByPk(id)
        if (!upForo){
            return res.status(404).json({
                message: 'Post no encontrado'
            })
        }
        upForo.update(req.body)
        return res.status(200).json(upForo)
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

