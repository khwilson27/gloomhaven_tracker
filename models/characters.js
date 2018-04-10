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
      class_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      party_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      xp: {
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
  
    Character.associate = function (models) {
      Character.hasOne(models.Party, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return Character;
  };
  