import './StaticItem.scss'

const StaticItem = ({ item }) => {

  return (
    <article className='static-item'>

      <input 
        type='checkbox' 
        name='checkbox' 
        aria-label='checkbox'
        role='checkbox' 
      />

      <div className='item-box'>
        <p>{item}</p>
      </div>

    </article>
  )
}

export default StaticItem