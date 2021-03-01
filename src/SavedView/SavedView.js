import './SavedView.scss'
import { getAllPackingLists, deletePackingList } from '../apiCalls'
import ListThumbnail from '../ListThumbnail/ListThumbnail'
import Modal from 'react-modal'
import { modalStructure } from '../VerifyDeletionModal/modalStyles'
import React, { useEffect, useState } from 'react'
import VerifyDeletionModal from '../VerifyDeletionModal/VerifyDeletionModal'

const SavedView = (props) => {
  const [allPackingLists, setAllPackingLists] = useState([])
  const [listToDelete, setListToDelete] = useState('')
  const [verifyDeletion, setVerifyDeletion] = useState(true)
  const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false)

  useEffect(() =>  {
    Modal.setAppElement('body')
    getAllPackingLists()
      .then(data => setAllPackingLists(data.data.attributes['PackingLists']))
  }, [])

  const openModal = (listId) => {
    setListToDelete(listId)
    if(verifyDeletion === true) {
      setDeletionModalIsOpen(true);
    }
  }

  const closeModal = () => {
    setDeletionModalIsOpen(false)
  }

  const createListThumbnails = () => {
    if(allPackingLists) {
      return allPackingLists.map(list => {
        return (
          <ListThumbnail 
          key={list.list_id}
          listId={list.list_id}
          title={list.title}
          destination={list.destination}
          duration={list.num_of_days}
          deleteList={deleteList}
          verifyDeletion={verifyDeletion}
          openModal={openModal}
          />
          )
        }).reverse()
      }
  }

  const deleteList = (listId) => {
    console.log(listId)
    deletePackingList(listId)
      .then(() => {
        getAllPackingLists()
        .then(data => setAllPackingLists(data.data.attributes['PackingLists']))
        .catch(error => console.error)
      })
      .catch(() => console.error)
  }

  return(
    <section className='saved-view'>
      <h1 className='saved-title'>Saved Trips</h1>
      <section className='saved-thumbnail-container'>
        {createListThumbnails()}
      </section>
      <Modal
          isOpen={deletionModalIsOpen}
          onRequestClose={closeModal}
          style={modalStructure}
          contentLabel="Delete Item Modal"
        >
          <VerifyDeletionModal 
            setVerifyDeletion={setVerifyDeletion}
            deleteItem={deleteList}
            closeModal={closeModal}
            categoryToDelete='list'
            itemToDelete={listToDelete}
          />
      </Modal>
    </section>
  )
}

export default SavedView
