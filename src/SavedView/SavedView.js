import ListThumbnail from '../ListThumbnail/ListThumbnail'
import React, { useEffect, useState } from 'react'
import './SavedView.scss'
import { getAllPackingLists, deletePackingList } from '../apiCalls'

const SavedView = (props) => {
  const [allPackingLists, setAllPackingLists] = useState([])

  useEffect(() =>  {
    getAllPackingLists()
      .then(data => setAllPackingLists(data.data.attributes['PackingLists']))
  }, [])

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
          />
          )
        })
      }
  }

  const deleteList = (listId) => {
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
    </section>
  )
}

export default SavedView