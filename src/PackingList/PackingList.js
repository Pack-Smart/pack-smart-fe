import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

// UI Imports
import './PackingList.scss'
import { BiPencil } from 'react-icons/bi'
import { modalStructure } from './modalStyles'

// App Imports
import { deleteItem } from '../actions/actions'
import Error from '../Error/Error'
import Modal from 'react-modal'
import UpdateDetailsModal from '../UpdateDetailsModal/UpdateDetailsModal'
import StaticCategory from '../StaticCategory/StaticCategory'
import VerifyDeletionModal from '../VerifyDeletionModal/VerifyDeletionModal'
import { saveNewPackingList } from '../apiCalls'
import { useHistory } from 'react-router-dom'

const PackingList = ({ packingList, deleteItem, userInfo }) => {
  let history = useHistory()
  const { tripDetails, categories } = packingList
  const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false)
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState('')
  const [itemToDelete, setItemToDelete] = useState('')
  const [verifyDeletion, setVerifyDeletion] = useState(true)
  
  useEffect(() => {
    Modal.setAppElement('body');
  }, [])
   
  const openModal = (category, name) => {
    setCategoryToDelete(category)
    setItemToDelete(name)
    if(verifyDeletion === true) {
      setDeletionModalIsOpen(true);
    }
  }

  const closeModal = () => {
    setDeletionModalIsOpen(false)
    setDetailsModalIsOpen(false)
  }

  const editTripDetails = () => {
    //to update the store, and make patch call
  }
  
  const verifyPackingList = () => {
    if (Object.keys(packingList).length > 0) {
      return (
        <>
          {window.scrollTo(0,0)}
          <header className='packing-list-header'>
            <h1>{tripDetails.title} 
              <BiPencil 
                className='edit-title' 
                size={25}
                onClick={() => setDetailsModalIsOpen(true)}
              />
            </h1>
            <h2>{tripDetails.destination}</h2>
            <h3>{tripDetails.number_of_days} {tripDetails.number_of_days > 1 ? 'days' : 'day'}</h3>
          </header>
            {createCategoryCards()}
          <button
            className='save-list-button'
            onClick={submitNewPackingList} 
          >Save List
          </button>
        </>
      )
    } else {
      return(
        <Error 
          errorMessage='Packing list is loading...If nothing shows up in the next 10 seconds, please try again!'
        />
      )
    }
  }

  const createCategoryCards = () => {
    const listCategories = Object.keys(categories)

    return listCategories.map(cat => {
      return (
        <StaticCategory 
          key={cat}
          catTitle={cat}
          items={categories[cat]}
          openModal={openModal}
          verifyDeletion={verifyDeletion}
        />
      )
    })
  }

  const submitNewPackingList = () => {
    let listToSave = compilePackingList()
    saveNewPackingList(listToSave)
      .then(() => history.push('/saved-packing-lists'))
      .catch(() => console.error)
  }

  const compilePackingList = () => {
    const items = Object.values(packingList.categories).flat()
    const cleanedItems = items.map(item => {
      return {
        item_id: item.item_id, 
        quantity: item.quantity, 
        is_checked: item.is_checked}
    })
    return ({
      data: {
        userID: userInfo.userId,
        tripDetails,
        items: cleanedItems
      }
    })
  }

  return (
    <section className='packing-list-main'>
      {verifyPackingList()}
      <Modal
          isOpen={deletionModalIsOpen}
          onRequestClose={closeModal}
          style={modalStructure}
          contentLabel="Delete Item Modal"
        >
          <VerifyDeletionModal 
            setVerifyDeletion={setVerifyDeletion}
            deleteItem={deleteItem}
            closeModal={closeModal}
            categoryToDelete={categoryToDelete}
            itemToDelete={itemToDelete}
          />
      </Modal>
      <Modal
          isOpen={detailsModalIsOpen}
          onRequestClose={closeModal}
          style={modalStructure}
          contentLabel="Update Trip Details Modal"
        >
          <UpdateDetailsModal
            setDetailsModalIsOpen={setDetailsModalIsOpen}
            closeModal={closeModal}
            editTripDetails={editTripDetails}
          />
      </Modal>
    </section> 
  )
}

const mapStateToProps = (state) => ({
  packingList: state.packingList,
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (category, name) => dispatch(deleteItem(category, name)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(PackingList)
