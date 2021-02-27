import { getSinglePackingList } from '../apiCalls'
import { setCurrentList } from '../actions/actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ListThumbnail.scss'

const ListThumbnail = ({ title, destination, duration, listId, setCurrentList }) => {
  let history = useHistory()
  const viewPackingList = async () => {
    // loading ... message
    getSinglePackingList(listId)
      // .then(data => console.log(data.data.attributes))
      .then(data => {
        setCurrentList({
        tripDetails: {
          title,
          destination,
          duration,
        },
        categories:
          data.data.attributes.categories
      })
      // history.push('/packing-list')
    })
    // .then(() => history.push('/packing-list'))
    .catch(() => console.error)
    // await history.push('.packing-list')
  
  }
  
  return(
    <section className='thumbnail-main' onClick={viewPackingList}>
      <h1 className='thumbnail-title'>{title}</h1>
      <h2 className='thumbnail-destination'>{destination}</h2>
      <h3 className='thumbnail-duration'>{duration} {duration > 1 ? 'days' : 'day'}</h3>
    </section>
  )
}


const mapDispatchToProps = (dispatch) => ({
  setCurrentList: data => dispatch(setCurrentList(data))
})

export default connect(mapDispatchToProps, {setCurrentList})(ListThumbnail)


/*
categories:
Accessories: (5) [{…}, {…}, {…}, {…}, {…}]
Clothing: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
Essentials: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
Misc.: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
Toiletries: (19) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
__proto__: Object
tripDetails:
destination: "Tokyo"
number_of_days: "25"
title: "Alyssa"
*/