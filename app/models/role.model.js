model.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            //autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            //allowNull: false,
            //unique: true,
        },
    });
    /**
     * @description
     * @param {object} options
     * @returns {object}
     */
    /*
    Role.associate = (models) => {
      Role.belongsToMany(models.User, {
        through: 'UserRoles',
        as: 'users',
        foreignKey: 'roleId',
      });
    };*/
    return Role;
};