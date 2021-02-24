import { categoryIcons } from './categoryIcons.js'
import StaticItem from '../StaticItem/StaticItem'
import { BsPlusCircle } from 'react-icons/bs'
import './StaticCategory.scss'

const StaticCategory = ({ catTitle, items, openModal, verifyDeletion }) => {

  const generateListItems = () => {
    let sortedItems = items.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    return sortedItems.map(item => {
      return (
        <StaticItem
          key={item.item_id} 
          item={item}
          category={catTitle}
          quantity='Qty.'
          openModal={openModal}
          verifyDeletion={verifyDeletion}
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
            <button className='edit-category'><BsPlusCircle size={20} /></button>
          </div>
        </h1>
      <article className='list-items'>
        {generateListItems()}
      </article>
    </section>
  )
}

export default StaticCategory