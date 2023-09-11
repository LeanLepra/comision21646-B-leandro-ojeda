import { Sequelize } from "sequelize";  

export const sequelize = new Sequelize('db_foro', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export const startDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        //await sequelize.sync( {force: true} );
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}