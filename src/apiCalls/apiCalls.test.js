import { getPackingListData, saveNewPackingList, getAllPackingLists, getSinglePackingList, deletePackingList, editPackingListItem, patchTripDetails, deleteSingleItem } from './apiCalls'
import { mockQuizData, mockPackingList, mockItemData, mockTripDetails, mockDeletionData } from '../sampleData' 
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
  afterEach(() => jest.restoreAllMocks())

  it('should be called with correct params when getPackingListData is called with data', () => {
    const bodyHeadersMethod = { 
      body: JSON.stringify(mockQuizData), 
      headers: type, method: 'POST' 
    }
    const url = "https://pack-smart-be.herokuapp.com/api/v1/list/new"
    
    getPackingListData(mockQuizData)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url, bodyHeadersMethod)
  })

  it('should be called with correct params when saveNewPackingList is called with data', () => {
    const bodyHeadersMethod = { 
      body: JSON.stringify(mockPackingList), 
      headers: type, 
      method: 'POST'
    }
    const url = "https://pack-smart-be.herokuapp.com/api/v1/packing_lists/new"

    saveNewPackingList(mockPackingList)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url, bodyHeadersMethod)
  })

  it('should be called with the correct url when getAllPackingLists is called with no data', () => {
    const url = "https://pack-smart-be.herokuapp.com/api/v1/users/1/packing_lists"
    getAllPackingLists()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it('should be called with the correct url when getSinglePackingList is called with an id', () => {
    const url = "https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1"
    getSinglePackingList(1)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it('should be called with the correct params when deletePackingList is called with an id', () => {
    const headersAndMethod = { 
      headers: type, 
      method: 'DELETE' 
    }
    const url = "https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1"

    deletePackingList(1)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url, headersAndMethod)
  })

  it('should be called with the correct params when editPackingListItem is called with data', () => {
    const bodyHeadersMethod = { body: JSON.stringify(mockItemData), 
      headers: type, 
      method: 'PATCH' 
    }
    const url = "https://pack-smart-be.herokuapp.com/api/v1/item_list/update"

    editPackingListItem(mockItemData)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url, bodyHeadersMethod)
  })

  it('should be called with the correct params when patchTripDetails is called with data', () => {
    const bodyHeadersMethod = { 
      body: JSON.stringify(mockTripDetails), 
      headers: type, 
      method: 'PATCH' 
    }
    const url = 'https://pack-smart-be.herokuapp.com/api/v1/packing_lists/67'

    patchTripDetails(67, mockTripDetails)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url, bodyHeadersMethod)
  })

  it('should be called with the correct params when deleteSingleItem is called with an id', () => {
    const bodyHeadersMethod = { 
      body: JSON.stringify(mockDeletionData), 
      headers: type, 
      method: 'DELETE' 
    }
    const url = "https://pack-smart-be.herokuapp.com/api/v1/item_list/update"

    deleteSingleItem(mockDeletionData)
    
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(url, bodyHeadersMethod)
  })
})