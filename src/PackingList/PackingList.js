import StaticCategory from '../StaticCategory/StaticCategory'
import Error from '../Error/Error'
import './PackingList.scss'
import { connect } from 'react-redux'

// TODO: Update samplePackingList to props

const PackingList = ({ packingList }) => {

  const verifyPackingList = () => {
    if (packingList.Accessories) {
      return (
        <>
          <header className='packing-list-header'>
            <h1>Trip Title</h1>
            <h2>Destination</h2>
            <h3>Duration</h3>
          </header>
          <button className='save-list-button'>
            Save List
          </button>
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

    const categories = Object.keys(packingList)

    return categories.map(cat => {
      return (
        <StaticCategory 
          key={cat}
          catTitle={cat}
          items={packingList[cat]}
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