module.exports = (sequelize, DataTypes) => {
    const Training = sequelize.define("Training", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trainer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trainer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return Training;
}