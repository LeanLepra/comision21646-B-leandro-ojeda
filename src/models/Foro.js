import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const ForoModel = sequelize.define('Foro', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content:{
        type: DataTypes.STRING,
        allowNull: true
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    }

},{
    timestamps: true
})