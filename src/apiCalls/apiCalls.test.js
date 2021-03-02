import { getPackingListData, saveNewPackingList, getAllPackingLists, getSinglePackingList, deletePackingList, editPackingListItem, patchTripDetails, deleteSingleItem } from './apiCalls'
import { mockQuizData, mockPackingList, mockItemData, mockTripDetails } from '../sampleData' 
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
    const bodyHeadersMethod = { body: JSON.stringify(mockQuizData), headers: type, method: 'POST' }

    getPackingListData(mockQuizData)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/list/new", bodyHeadersMethod)
  })

  it('should be called with correct params when saveNewPackingList is called with data', () => {
    const bodyHeadersMethod = { body: JSON.stringify(mockPackingList), headers: type, method: 'POST'}

    saveNewPackingList(mockPackingList)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/packing_lists/new", bodyHeadersMethod)
  })

  it('should be called with the correct url when getAllPackingLists is called with no data', () => {
    getAllPackingLists()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/users/1/packing_lists")
  })

  it('should be called with the correct url when getSinglePackingList is called with an id', () => {
    getSinglePackingList(1)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1")
  })

  it('should be called with the correct params when deletePackingList is called with an id', () => {
    const headersAndMethod = { headers: type, method: 'DELETE' }

    deletePackingList(1)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1", headersAndMethod)
  })

  it('should be called with the correct params when editPackingListItem is called with data', () => {
    const bodyHeadersMethod = { body: JSON.stringify(mockItemData), headers: type, method: 'PATCH' }

    editPackingListItem(mockItemData)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith("https://pack-smart-be.herokuapp.com/api/v1/item_list/update", bodyHeadersMethod)
  })

  it('should be called with the correct params when patchTripDetails is called with data', () => {
    const bodyHeadersMethod = { body: JSON.stringify(mockTripDetails), headers: type, method: 'PATCH' }
    
    patchTripDetails(67, mockTripDetails)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://pack-smart-be.herokuapp.com/api/v1/packing_lists/67', bodyHeadersMethod)
  })

  it('should be called with the correct params when deleteSingleItem is called with an id', () => {
    const headersAndMethod = { headers: type, method: 'DELETE' }

    
  })
})