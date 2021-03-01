import React, { useState } from 'react'
import './StaticCategory.scss'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { categoryIcons } from './categoryIcons.js'
import StaticItem from '../StaticItem/StaticItem'

const StaticCategory = ({ catTitle, items, openModal, verifyDeletion }) => {
  const [displayItems, setDisplayItems] = useState(false)

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

  const toggleListItems = () => {
    setDisplayItems(!displayItems)
  }

  return (
    <section className='category-container'>
        <h1 className='cat-title'>
          {generateCategoryIcon(catTitle)}
          <div className='edit-category-container'>
            {catTitle}
            <button className='edit-category-btn' onClick={toggleListItems}>{displayItems === true ? <FiMinusCircle size={20} /> : <FiPlusCircle size={20} />}</button>
          </div>
        </h1>
      <article className='list-items'>
        {displayItems === true && generateListItems()}
      </article>
    </section>
  )
}

export default StaticCategory
