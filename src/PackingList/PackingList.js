import StaticCategory from '../StaticCategory/StaticCategory'
import Error from '../Error/Error'
import { BiPencil } from 'react-icons/bi'
import './PackingList.scss'
import { connect } from 'react-redux'

const PackingList = ({ packingList }) => {

  const { tripDetails, categories } = packingList
  
  const verifyPackingList = () => {
    if (packingList.categories) {
      return (
        <>
          <header className='packing-list-header'>
            <h1>{tripDetails.title} <BiPencil className='edit-title' size={25}/></h1>
            <h2>{tripDetails.destination}</h2>
            <h3>{tripDetails.number_of_days} {tripDetails.number_of_days > 1 ? 'days' : 'day'}</h3>
          </header>
          <section>
            {createCategoryCards()}
          </section>
          <button className='save-list-button'>
            Save List
          </button>
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
        />
      )
    })
  }

  return (
    <section className='packing-list-main'>
      {verifyPackingList()}
    </section> 
  )
}

const mapStateToProps = (state) => ({
  packingList: state.packingList
})

export default connect(mapStateToProps)(PackingList)