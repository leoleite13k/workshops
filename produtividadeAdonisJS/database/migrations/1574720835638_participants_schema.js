'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParticipantSchema extends Schema {
  up () {
    this.create('participant', (table) => {
      table.increments()
      table.string('name', 255)
      table.string('username', 255)
      table.string('email', 255)
      table.string('profile', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('participant')
  }
}

module.exports = ParticipantSchema
