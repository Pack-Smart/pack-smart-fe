import ListThumbnail from '../ListThumbnail/ListThumbnail'
import './SavedView.scss'

const SavedView = (props) => {
  return(
    <section className='saved-view'>
      <h1>Saved Trips</h1>
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