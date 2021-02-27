import './StaticCategory.scss'
import { BsPlusCircle } from 'react-icons/bs'
import { categoryIcons } from './categoryIcons.js'
import StaticItem from '../StaticItem/StaticItem'

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
          quantity='Qty.' //TODO: Possible change when we change input style for quantity
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
    <section className='category-container'>
        <h1 className='cat-title'>
          {generateCategoryIcon(catTitle)}
          <div className='edit-category-container'>
            {catTitle}
            <button className='edit-category-btn'><BsPlusCircle size={20} /></button>
          </div>
        </h1>
      <article className='list-items'>
        {generateListItems()}
      </article>
    </section>
  )
}

export default StaticCategory
