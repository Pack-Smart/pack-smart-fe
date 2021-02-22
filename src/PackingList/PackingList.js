import StaticCategory from '../StaticCategory/StaticCategory'
// import { samplePackingList } from '../sampleData'
import './PackingList.scss'
import { connect } from 'react-redux'

// TODO: Update samplePackingList to props

const PackingList = ({ packingList }) => {

  const createCategoryCards = () => {
    console.log('list', packingList)
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
    </section>
  )
}

const mapStateToProps = (state) => ({
  packingList: state.packingList
})

export default connect(mapStateToProps)(PackingList)