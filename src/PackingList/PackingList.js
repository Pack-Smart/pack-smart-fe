import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

// UI Imports
import './PackingList.scss'
import { BiPencil } from 'react-icons/bi'
import { verifyDeletionStyles } from './modalStyles'

// App Imports
import { deleteItem } from '../actions/actions'
import Error from '../Error/Error'
import Modal from 'react-modal'
import StaticCategory from '../StaticCategory/StaticCategory'
import VerifyDeletionModal from '../VerifyDeletionModal/VerifyDeletionModal'
import { saveNewPackingList } from '../apiCalls'
import { useHistory } from 'react-router-dom'

const PackingList = ({ packingList, deleteItem, userInfo }) => {
  let history = useHistory()
  const { tripDetails, categories } = packingList
  const [modalIsOpen,setIsOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState('')
  const [itemToDelete, setItemToDelete] = useState('')
  const [verifyDeletion, setVerifyDeletion] = useState(true)
  // const [userId, setUserId] = useState(null)
  
  useEffect(() => {
    Modal.setAppElement('body');
    // setUserId(userInfo.userId)
  }, [])
   
  const openModal = (category, name) => {
    setCategoryToDelete(category)
    setItemToDelete(name)
    if(verifyDeletion === true) {
      setIsOpen(true);
    } 
  }

  const closeModal = () =>{
    setIsOpen(false);
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
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={verifyDeletionStyles}
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
