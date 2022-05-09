import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isModeChange: true,
  }

  onChangeMode = () => {
    this.setState(prevState => ({isModeChange: !prevState.isModeChange}))
  }

  render() {
    const {isModeChange} = this.state

    const modeClassName = isModeChange ? 'dark-mode' : 'light-mode'
    const buttonText = isModeChange ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="light-mode-container">
        <div className={`light-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode </h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
