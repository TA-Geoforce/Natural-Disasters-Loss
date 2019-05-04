import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerEarthquakes from '../components/earthquakes/BannerEarthquakes'

import picearthquake from '../assets/images/earthquakes.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Earthquakes = (props) => (
    <Layout> 
        <Helmet>
            <title>Earthquakes Loss</title>
            <meta name="description" content="Earthquakes Loss" />
        </Helmet>

        <BannerEarthquakes />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Natural Disaster</h2>
                    </header>
                    <p>Earthquakes are a devastating yet common natural disaster that causes billions of dollars in property damage and the loss of human life.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/earthquake" className="image">
                        <img src={picearthquake} alt="earthquake" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AI for Earthquakes</h3>
                            </header>
                            <p>Our work with organizations on the front lines of natural disatsers is creating inclusive solutions designed to help empower people everywhere.</p>
                        </div>
                    </div>
                </section>
               </section>
        </div>

    </Layout>
)

export default Earthquakes