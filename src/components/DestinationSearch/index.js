import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputVal: ''}

  changeInputVal = e => {
    this.setState({inputVal: e.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputVal} = this.state
    console.log(inputVal)
    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputVal.toLowerCase()),
    )

    return (
      <div className="wrapper">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-wrapper">
          <input
            type="search"
            onChange={this.changeInputVal}
            placeholder="Search"
            className="search-input"
            value={inputVal}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="icon"
          />
        </div>
        <ul className="list-wrapper">
          {filteredList.map(eachItem => (
            <DestinationItem key={eachItem.id} destination={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
