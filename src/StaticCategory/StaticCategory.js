import { categoryIcons } from './categoryIcons.js'
import StaticItem from '../StaticItem/StaticItem'
import './StaticCategory.scss'

const StaticCategory = ({ catTitle, items }) => {

  const generateListItems = () => {
    let sortedItems = items.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    console.log(sortedItems)
    return sortedItems.map(item => {
      return (
        <StaticItem
          key={item.id} 
          item={item}
          category={catTitle}
          quantity='Qty.'
        />
      )
    })
  }

  const generateCategoryIcon = (cat) => {
    let category = categoryIcons.find(icon => {
      return icon.name === cat
    })
    return category.icon
  }

  return (
    <section>
      <h1 className='cat-title'>{generateCategoryIcon(catTitle)}{catTitle}</h1>
      <article className='list-items'>
        {generateListItems()}
      </article>
    </section>
  )
}

export default StaticCategory