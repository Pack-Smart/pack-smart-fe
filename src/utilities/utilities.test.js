import { compilePackingList, compileSubmissionData, compileRequiredList, compileCustomItemData } from './utilities'
import { mockPrecompiledPackingList, mockPackingList, mockQuizSubmissionData, mockQuizData, mockCompiledCustomItemData } from '../sampleData'

describe('utilities', () => {

  describe('should compilePackingList', () => {
    it('should return a formatted object when given packing list data, and a user id', () => {
      const userID = 1
      const result = compilePackingList(mockPrecompiledPackingList, userID)

      expect(result).toEqual(mockPackingList)
    })
  })

  describe('should compileSubmissionData', () => {
    it('should return a formatted object when given quiz data', () => {
      const result = compileSubmissionData(mockQuizSubmissionData)

      expect(result).toEqual(mockQuizData)
    })
  })

  describe('should compileRequiredList', () => {
    it('should return a formatted object when given quiz data', () => {
      const result = compileRequiredList(mockQuizData)
      const { name, weather, gender, destination, number_of_days } = mockQuizData
      const compiledList = [name, weather, gender, destination, number_of_days]
  
      expect(result).toEqual(compiledList)
    })
  })

  describe('should compileCustomItemData', () => {
    it('should return a formatted object when given a custom item object and a list id', () => {
      const item = {quantity: '3', name: 'Balloons', category: 'Accessories'}
      const listId = 1

      const result = compileCustomItemData(item, listId)
     
      expect(result).toEqual(mockCompiledCustomItemData)
    })
  })
})