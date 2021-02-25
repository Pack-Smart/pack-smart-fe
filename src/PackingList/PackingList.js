import React, { useState, useEffect } from 'react'
import StaticCategory from '../StaticCategory/StaticCategory'
import Error from '../Error/Error'
import { BiPencil } from 'react-icons/bi'
import './PackingList.scss'
import { deleteItem } from '../actions/actions'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import VerifyDeletionModal from '../VerifyDeletionModal/VerifyDeletionModal'
import { verifyDeletionStyles } from './modalStyles'
import { Link } from 'react-router-dom'
import { saveNewPackingList } from '../apiCalls'

const PackingList = ({ packingList, deleteItem, userInfo }) => {

  const { tripDetails, categories } = packingList
  const [modalIsOpen,setIsOpen] = useState(false);
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
      setIsOpen(true);
    } 
  }

  const closeModal = () =>{
    setIsOpen(false);
  }
  
  const verifyPackingList = () => {
    if (packingList.categories) {
      return (
        <>
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
          <section>
            {createCategoryCards()}
          </section>
          <Link
            className='save-list-button'
            onClick={saveNewPackingList} 
            to="/saved-packing-lists" 
          >Save List
          </Link>
        </>
      )
    } else {
      return(
        <Error 
          errorMessage='Oops! No packing list exists.'
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

  const saveNewPackingList = () => {
    const listToSave = compilePackingList()
    saveNewPackingList(listToSave)
    //and thennnnnnnnnn
  }

  const compilePackingList = () => {
    const items = Object.values(packingList.categories).flat()
    return ({
        userID: 1,
        tripDetails,
        items
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
  packingList: state.packingList
})

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (category, name) => dispatch(deleteItem(category, name)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(PackingList)