import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount - 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate {mangoCount} Mangoes
            {bananaCount} bananas
          </h1>
          <div className="card">
            <div className="mangoContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                type="button"
                className="buttonMango"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="bananaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
                onClick={this.onEatBanana}
              />
              <button type="button" className="buttonBanana">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
