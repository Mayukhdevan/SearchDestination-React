import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination

  return (
    <div className="list-item">
      <img className="place-img" src={imgUrl} alt={name} />
      <p className="place-name">{name}</p>
    </div>
  )
}

export default DestinationItem
