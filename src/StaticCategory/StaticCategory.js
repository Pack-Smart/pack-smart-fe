import { categoryIcons } from './categoryIcons.js';
import StaticItem from '../StaticItem/StaticItem'
import './StaticCategory.scss'

const StaticCategory = ({ catTitle, items }) => {
  
  /* TODO: once this is hooked up to localStorage, we'll need to replace
  false with a function that runs in the event that the typeof is objects and includes
  properties of quantity and isChecked 
  */
  const checkDataType = () => {
    return typeof items[0] === 'string' ? true : false
  }

  const generateListItems = () => {

    if (checkDataType()) {
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
  }

  const generateCategoryIcon = (cat) => {
    let category = categoryIcons.find(icon => {
      return icon.name === cat
    })
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