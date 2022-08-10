'use strict'

const Participant = new (use('App/Models/Participant'))()

class ParticipantController {
  async getAll({ request, response, params }) {
    const data = await Participant.getAll()

    return response.status(200).json(data)
  }

  async getById({ request, response, params }) {
    const data = await Participant.getById(params.id)

    return response.status(200).json(data)
  }

  async updateById({ request, response, params }) {
    return request

    const data = await Participant.updateById(params.id, request)

    return response.status(200).json(data)
  }

  async deleteById({ request, response, params }) {
    await Participant.deleteById(params.id)
  }

  async add({ request, response, params }) {
    const req = request.only([
      'name',
      'username',
      'profile',
      'email'
    ])

    const data = await Participant.add(req)

    return data
  }
}

module.exports = ParticipantController
