import { getSinglePackingList, getAllPackingLists } from '../apiCalls/apiCalls'
import { setCurrentList } from '../actions/actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ListThumbnail.scss'

const ListThumbnail = ({ title, destination, duration, listId, setCurrentList, deleteList, verifyDeletion, openModal }) => {

  let history = useHistory()
  const viewPackingList = () => {
    getSinglePackingList(listId)
      .then(data => setCurrentList(data.data.attributes))
      .then(() => history.push('/packing-list'))
      .catch(() => console.error)
  }

  const determineModalOpen = () => {
    if (verifyDeletion === true) {
      openModal(listId)
    } else {
      deleteList(listId)
    }
  }
  
  return(
    <section className='thumbnail-main'>
      <div className='delete-btn-container'>
        <button className='thumbnail-deleteBtn' onClick={() => {
          determineModalOpen(listId)
        }}>X</button>
      </div>
      <div className='thumbnail-contents' onClick={viewPackingList}>
        <h1 className='thumbnail-title'>{title}</h1>
        <h2 className='thumbnail-destination'>{destination}</h2>
        <h3 className='thumbnail-duration'>{duration} {duration > 1 ? 'days' : 'day'}</h3>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentList: data => dispatch(setCurrentList(data))
})

export default connect(null, mapDispatchToProps)(ListThumbnail)