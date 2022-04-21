import React from 'react'
import logo from '../assets/logo_prm.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <div className="landing-page-logo-header">
            <img src={logo} className="landing-page-logo"/>
            <div className="landing-page-header">Personal Relationship Manager</div>
            <img src={logo} className="landing-page-logo" style={{visibility: "hidden"}}/>
        </div>
        <div className="row text-center">
            <div className="landing-page-container">
                <div className="landing-page-title col-6 contacts-background">
                  <Link to="/contact" className="landing-page-link">Contacts</Link>
                </div>
                <div className="landing-page-title col-6 events-background">
                  <Link to="/event" className="landing-page-link">Events</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home