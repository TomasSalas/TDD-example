import {jest} from '@jest/globals'
import postHandler from './index.js'
describe('Endpoint', () => {
  describe('Post', () => {
    it.skip('should create', async () => {
      const mockUsers = [
        {id: 1}, 
        {id: 2},
      ]
      const Post = {
        userId: 1,
        id: 1,
        title: "Titulo",
        body: "Cuerpo"
      }
      const req = {
        body: Post 
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }

      const axios = {
        get:jest.fn().mockResolvedValue({data:mockUsers}),
        post:jest.fn().mockResolvedValue({data: {id:1000}})
      }

      await postHandler({ axios }).post(req, res)
      
      expect(res.status.mock.calls).toEqual([[201]])
      expect(res.send.mock.calls).toEqual([[{id:1000}]])
      expect(axios.get.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users']])
      expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/posts' , Post]])


    })

    it.skip('should not create if userId does not exist', async () => {
      const mockUsers = [
        {id: 1}, 
        {id: 2},
      ]
      const Post = {
        userId: 3,
        id: 1,
        title: "Titulo",
        body: "Cuerpo"
      }
      const req = {
        body: Post 
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        sendStatus: jest.fn()
      }

      const axios = {
        get:jest.fn().mockResolvedValue({data:mockUsers}),
        post:jest.fn().mockResolvedValue({data: {id:1000}})
      }

      await postHandler({ axios }).post(req, res)
      expect(axios.post.mock.calls).toEqual([])
      expect(res.sendStatus.mock.calls).toEqual([[500]])
    })
  })
})