import React, { useState } from 'react'
import './StaticCategory.scss'
import { FiPlusCircle } from 'react-icons/fi'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
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

  const toggleListItems = () => {
    setDisplayItems(!displayItems)
  }

  return (
    <section className='category-container'>
        <h1 className='cat-title'>
          {generateCategoryIcon(catTitle)}
          <div className='edit-category-container'>
            {catTitle}
            <button className='add-item-btn'><FiPlusCircle size={20} /></button>
          </div>
        </h1>
      <article className='list-items'>
        {displayItems === true && generateListItems()}
      </article>
      <article className='arrow-container'>
        <button className='edit-category-btn' onClick={toggleListItems}>{displayItems === true ? <FaChevronDown size={25} /> : <FaChevronUp size={25} />}</button>
      </article>
    </section>
  )
}

export default StaticCategory
