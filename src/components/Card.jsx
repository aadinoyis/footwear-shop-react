
export const Card = ({name, desc, price, cardClass}) => {
  return (
    <div className={cardClass}>
      <div className='details'>
        <div className='title'>
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
        <div className='price'>{price}</div>
      </div>
    </div>
  )
}
