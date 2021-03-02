import { compilePackingList, compileSubmissionData } from './utilities'
import { mockPrecompiledPackingList, mockPackingList } from '../sampleData'

describe('utilities', () => {

  describe('should compilePackingList', () => {
    it('should return a formatted object when given packing list data, and a user id', () => {
      const userID = 1
      const result = compilePackingList(mockPrecompiledPackingList, userID)

      expect(result).toEqual(mockPackingList)
    })

  })
})