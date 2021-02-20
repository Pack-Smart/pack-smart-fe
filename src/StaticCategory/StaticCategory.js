import StaticItem from '../StaticItem/StaticItem'
import './StaticCategory.scss'

const StaticCategory = ({ catTitle, items }) => {

  const generateListItems = () => {
    return items.map(item => {
      return (
        <StaticItem
          key={item} 
          item={item}
        />
      )
    })
  }

  return (
    <section>
      <h1>{catTitle}</h1>
      <article>
        {generateListItems()}
      </article>
    </section>
  )
}

export default StaticCategory