import authenticate from './authenticate.js'
import {jest} from '@jest/globals'

describe('Middlerwares', () => {
  describe('Authenticate', () => {
    it.skip('should have ID 1', () => {
      const req = {
        headers: jest.fn().mockReturnValue("1")
      }
      const res = {
        sendStatus: jest.fn()
      }
      const next = jest.fn()
      authenticate(req , res, next)

      expect(req.headers.mock.calls).toEqual([
        ['user_id']
      ])

      expect(res.sendStatus.mock.calls).toEqual([])
      expect(next.mock.calls).toEqual([[]])
    })

    it.skip('should fail if user not the on with ID 1', async () => {
      const req = {
        headers: jest.fn().mockReturnValue("2")
      }
      const res = {
        sendStatus: jest.fn()
      }
      const next = jest.fn()
      await authenticate(req , res, next)

      expect(req.headers.mock.calls).toEqual([['user_id']])
      expect(res.sendStatus.mock.calls).toEqual([[403]])
      expect(next.mock.calls).toEqual([])
    })
  })

  
})