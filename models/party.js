module.exports = function (sequelize, DataTypes) {
    var Party = sequelize.define("Party", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
        unique: true
      }
    });

    // Party.associate = function (models) {
    //   Party.belongsTo(models.Character, {
    //     onDelete: "CASCADE"
    //   });
    // }

    return Party;
  };
  