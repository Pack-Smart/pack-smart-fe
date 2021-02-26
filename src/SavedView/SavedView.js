import ListThumbnail from '../ListThumbnail/ListThumbnail'
import React, { useEffect } from 'react'
import './SavedView.scss'
import { getAllPackingLists } from '../apiCalls'

const SavedView = (props) => {

  useEffect(() =>  {
    getAllPackingLists()
      .then(data => console.log(data))
  }, [])

  return(
    <section className='saved-view'>
      <h1 className='saved-title'>Saved Trips</h1>
      <section className='saved-thumbnail-container'>
        <ListThumbnail />
        <ListThumbnail />
        <ListThumbnail />
        <ListThumbnail />
        <ListThumbnail />
      </section>
    </section>
  )
}

export default SavedView