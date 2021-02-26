import './ListThumbnail.scss'

const ListThumbnail = ({title, destination, duration}) => {

  return(
    <section className='thumbnail-main'>
      <h1 className='thumbnail-title'>{title}</h1>
      <h2 className='thumbnail-destination'>{destination}</h2>
      <h3 className='thumbnail-duration'>{duration} {duration > 1 ? 'days' : 'day'}</h3>
    </section>
  )
}

export default ListThumbnail