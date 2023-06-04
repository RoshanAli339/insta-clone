import React from 'react'
import './HomePage.css'
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'

function Homepage() {
  return (
    <div className="homepage">
        <div class="homepage__nav">
            <Sidenav />
        </div>
        <div class="homepage__timeline">
            <Timeline />
        </div>
    </div>
  )
}

export default Homepage