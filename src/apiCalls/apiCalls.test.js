import { getPackingListData, saveNewPackingList, getAllPackingLists, getSinglePackingList, deletePackingList, editPackingListItem, patchTripDetails, deleteSingleItem } from './apiCalls'
import { mockQuizData } from '../sampleData' 
import '@testing-library/jest-dom'

describe('fetch', () => {
  it('should be called with quiz data when getPackingListData is called', () => {
    const type = {"Content-Type": "application/json"}
    const bodyHeadersMethod = { body: JSON.stringify(mockQuizData), headers: type, method: 'POST' }
    jest.spyOn(global, 'fetch').mockImplementationOnce(getPackingListData(mockQuizData))
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/list/new", bodyHeadersMethod)
  })
})