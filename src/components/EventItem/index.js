// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, clickEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEvent = () => {
    clickEvent(registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={onClickEvent} className="click-event-btn">
        <img src={imageUrl} className="event-img" alt="event" />
      </button>
      <p className="image-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
