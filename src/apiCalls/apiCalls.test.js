import { getPackingListData, saveNewPackingList, getAllPackingLists } from './apiCalls'
import { mockSubmissionData } from '../sampleData'
import '@testing-library/jest-dom'

describe('getPackingListData', () => {
  it('should be called once', () => {
    getPackingListData = jest.fn()

    getPackingListData(mockSubmissionData)

    expect(getPackingListData).toHaveBeenCalledTimes(1)
  })

  // it('should be called with submission data', () => {

  // })
})