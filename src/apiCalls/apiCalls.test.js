import { getPackingListData, saveNewPackingList, getAllPackingLists, getSinglePackingList, deletePackingList, editPackingListItem, patchTripDetails, deleteSingleItem } from './apiCalls'
import { mockQuizData, mockPackingList } from '../sampleData' 
import '@testing-library/jest-dom'

describe('fetch', () => {
  let type
  beforeEach(() => {
    type = {"Content-Type": "application/json"}
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ lolOutLoud: { hmuMeUp: "ROFL on the floor" } }),
      })
    )
  })

  it('should be called with correct params when getPackingListData is called with data', () => {
    const bodyHeadersMethod = { body: JSON.stringify(mockQuizData), headers: type, method: 'POST' }

    getPackingListData(mockQuizData)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/list/new", bodyHeadersMethod)
    
  })

  it('should be called with correct params when saveNewPackingList is called with data', () => {
    jest.restoreAllMocks()
    const bodyHeadersMethod = { body: JSON.stringify(mockPackingList), headers: type, method: 'POST'}

    saveNewPackingList(mockPackingList)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/packing_lists/new", bodyHeadersMethod)
  })

})