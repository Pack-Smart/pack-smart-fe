import './ListThumbnail.scss'
import { getSinglePackingList } from '../apiCalls'
import { Link } from 'react-router-dom'

const ListThumbnail = ({ title, destination, duration, id}) => {
  
  const viewPackingList = () => {
    // getSinglePackingList(id, userId)
    //   .then(data => setCurrentList(data.data))
    //   .catch(() => console.error)
  }
  
  return(
    <Link to='/packing-list' className='thumbnail-main' onClick={viewPackingList}>
      <h1 className='thumbnail-title'>{title}</h1>
      <h2 className='thumbnail-destination'>{destination}</h2>
      <h3 className='thumbnail-duration'>{duration} {duration > 1 ? 'days' : 'day'}</h3>
    </Link>
  )
}

export default ListThumbnail
