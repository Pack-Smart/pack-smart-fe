import { categoryIcons } from './categoryIcons.js'
import StaticItem from '../StaticItem/StaticItem'
import { BiPencil } from 'react-icons/bi'
import './StaticCategory.scss'

const StaticCategory = ({ catTitle, items }) => {

  const generateListItems = () => {
    let sortedItems = items.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
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
        <h1 className='cat-title'>
          {generateCategoryIcon(catTitle)}
          <div className='edit-cat'>
            {catTitle}
            <button className='edit-category'><BiPencil size={25} /></button>
          </div>
        </h1>
      <article className='list-items'>
        {generateListItems()}
      </article>
    </section>
  )
}

export default StaticCategory