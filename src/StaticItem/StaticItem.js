import './StaticItem.scss'

const StaticItem = ({ item, quantity }) => {
  return (
    <article className='static-item'>
      
      <div className='quantity-container'>
        {quantity}
      </div>

      <div className='item-box'>
        <p>{item.name}</p>
      </div>

      <div className='input-container'> 
        <input
          type='checkbox' 
          name='checkbox' 
          aria-label='item checkbox'
          role='checkbox' 
        />
      </div>

    </article>
  )
}

export default StaticItem