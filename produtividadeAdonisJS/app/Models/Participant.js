'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Participant extends Model {
  static get table() {
    return 'participant'
  }

  static get primaryKey() {
    return 'id'
  }


  async getAll() {
    const participants = use('App/Models/Participant')

    return await participants.all()
  }

  async getById(params) {
    const participants = use('App/Models/Participant')

    return await participants.query().where({
      id: params
    }).first()
  }

  async updateById({id, params}) {
    const participants = use('App/Models/Participant')

    return id

    participant = await participants.query().where({
      id
    }).first()

    participant.merge(params)

    await participant.save()

    return participant
  }

  async deleteById(params) {
    const participants = use('App/Models/Participant')

    participant = await participants.query().where({
      params
    }).first()

    participant.delete()
  }

  async add(data) {
    const participants = new (use('App/Models/Participant'))

    participants.name = data.name
    participants.username = data.username
    participants.email = data.email
    participants.profile = data.profile

    const newParticipant = await participants.save()

    return newParticipant
  }

}

module.exports = Participant
