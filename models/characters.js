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
      },
      perk_1: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_2: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_3: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_4: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_5: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_6: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_7: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_8: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_9: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_10: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_11: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      },
      perk_12: {
        type: DataTypes.TINYINT,
        allowNull: true,
        default: 0
      }
    });
  
    // Character.associate = function (models) {
    //   Character.hasOne(models.Party, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };
  
    return Character;
  };
  