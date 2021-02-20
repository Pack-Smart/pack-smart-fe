import StaticCategory from '../StaticCategory/StaticCategory'
import { samplePackingList } from '../sampleData'
import './PackingList.scss'

// TODO: Update samplePackingList to props

const PackingList = () => {

  const createCategoryCards = () => {
    const categories = Object.keys(samplePackingList)

    return categories.map(cat => {
      return (
        <StaticCategory 
          key={cat}
          catTitle={cat}
          items={samplePackingList[cat]}
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
      <section>
        {createCategoryCards()}
      </section>
    </section>
  )
}

export default PackingList