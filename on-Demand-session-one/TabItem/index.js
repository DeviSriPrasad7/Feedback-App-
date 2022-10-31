import './index.css'

const TabItem = props => {
  const {tabDetails, details, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTab = () => {
    details(tabId)
  }

  const getStyles = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${getStyles}`}
        onClick={updateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
