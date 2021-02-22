import { categoryIcons } from './categoryIcons.js'
import StaticItem from '../StaticItem/StaticItem'
import './StaticCategory.scss'

const StaticCategory = ({ catTitle, items }) => {

  const generateListItems = () => {
    return items.map(item => {
      return (
        <StaticItem
          key={item} 
          item={item}
          quantity='Qty.'
        />
      )
    })
  }

  const generateCategoryIcon = (cat) => {
    let category = categoryIcons.find(icon => {
      return icon.name === cat
    })
    // TODO: take out console.log once all icons are confirmed working
    if (category !== undefined) {
      return category.icon
    } else {
      console.log(cat)
    }
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