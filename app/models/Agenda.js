const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize');

const Agenda = sequelize.define('Agenda', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING
  },
  numero: {
    type:DataTypes.INTEGER,
  },
  bairro:{
    type: DataTypes.STRING,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.INTEGER,

  },
  complemento: {
    type: DataTypes.STRING
  }
})

module.exports = Agenda