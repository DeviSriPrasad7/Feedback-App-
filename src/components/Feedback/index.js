// Write your React code here.
// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedBack: true,
  }

  onChangeResponse = () => {
    this.setState({isFeedBack: false})
  }

  originPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emojis-container">
        <h1>
          How satisfied are you with our
          <br />
          customer support performance
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id} className="list-container">
              <button
                type="button"
                onClick={this.onChangeResponse}
                className="button"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedBackPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="tq-container">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You</h1>
        <p>
          we will use your feedback to improve our customer support
          <br />
          performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          {isFeedBack ? this.originPage() : this.feedBackPage()}
        </div>
      </div>
    )
  }
}
export default Feedback
