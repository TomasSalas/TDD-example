import request from 'supertest'
import app from '../../server.js'


describe('Server', () => {
  describe('EndPoint', () => {
    describe('Post POST' , () => {
      it('Create a new Post' , async() => {
        const response = await request(app)
          .post('/')
          .send({ userId: 5})
          .set('user_id' , 1)
          .set('content_type' , 'application/json')

        expect(response.statusCode).toEqual(201)
        expect(response.body.userId).toEqual(5)
        expect(response.body).toHaveProperty('id')

      })
    })
  })
})
