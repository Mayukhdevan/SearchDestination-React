import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="wrapper">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-wrapper">
          <input type="search" placeholder="Search" className="search-input" />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="icon"
          />
        </div>
        <ul className="list-wrapper">
          {destinationsList.map(eachItem => (
            <DestinationItem key={eachItem.id} destination={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
