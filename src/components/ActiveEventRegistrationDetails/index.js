// Write your code here

import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: `YET_TO_REGISTER`,
  registered: `REGISTERED`,
  registrationsClosed: `REGISTRATIONS_CLOSED`,
}

const ActiveEventRegistrationDetails = props => {
  const {updatedStatus} = props

  const renderNoActiveEventView = () => (
    <>
      <div className="no-active-event-view-container">
        <p className="no-active-event-view-heading">
          Click on an event, to view its registration details
        </p>
      </div>
    </>
  )

  const renderYetToRegisterView = () => (
    <>
      <div className="yet-to-register-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register-img"
        />
        <p className="yet-to-register-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button type="button" className="register-here-btn">
          Register Here
        </button>
      </div>
    </>
  )

  const renderRegisteredView = () => (
    <>
      <div className="registered-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-img"
        />
        <h1 className="registered-description">
          You have already registered for the event
        </h1>
      </div>
    </>
  )

  const renderRegistrationClosedView = () => (
    <>
      <div className="registered-closed-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registration-closed-img"
        />
        <h1 className="registrations-closed-title">
          Registrations Are Closed Now!
        </h1>
        <p className="registrations-closed-descrption">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    </>
  )

  switch (updatedStatus) {
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegisterView()
    case registrationStatusConstants.registered:
      return renderRegisteredView()
    case registrationStatusConstants.registrationsClosed:
      return renderRegistrationClosedView()
    case registrationStatusConstants.initial:
      return renderNoActiveEventView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
