const { Sequelize } = require('sequelize');
const db = require('./config/database')

const Enemy = db.define('Enemy', {
    name: {
        type: Sequelize.STRING
    },
    initiative: {
        type: Sequelize.STRING
    },
    reflex: {
        type: Sequelize.STRING
    },
    fortitude: {
        type: Sequelize.STRING
    },
    will: {
        type: Sequelize.STRING
    },
    speed: {
        type: Sequelize.STRING
    },
    melee: {
        type: Sequelize.STRING
    },
    strength: {
        type: Sequelize.STRING
    },
    dexterity: {
        type: Sequelize.STRING
    },
    constitution: {
        type: Sequelize.STRING
    },
    intelligence: {
        type: Sequelize.STRING
    },
    wisdom: {
        type: Sequelize.STRING
    },
    charisma: {
        type: Sequelize.STRING
    },
    baseAttack: {
        type: Sequelize.STRING
    },
})

module.exports = Enemy