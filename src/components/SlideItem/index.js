import './index.css'

const SlideItem = props => {
  const {slideItem, number, isActive, clickSlideItem} = props
  const {heading, description} = slideItem
  const changeSlideItem = () => {
    clickSlideItem(number - 1)
  }

  return (
    <li
      className={
        isActive === number ? 'slide-item active-slide-item' : 'slide-item'
      }
      testid={`slideTab${number}`}
    >
      <p className="item-num">{number}</p>
      <button type="button" className="item-card" onClick={changeSlideItem}>
        <h1 className="item-title">{heading}</h1>
        <p className="title-description">{description}</p>
      </button>
    </li>
  )
}

export default SlideItem
