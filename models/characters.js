module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
        unique: true
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0
      },
      gold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0
      },
      notes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0
      }
    });
  
    // User.associate = function (models) {
    //   Character.hasMany(models.Post, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Character;
  };
  