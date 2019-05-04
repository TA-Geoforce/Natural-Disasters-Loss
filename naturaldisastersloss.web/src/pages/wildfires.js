import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerWildfires from '../components/wildfire/BannerWildfires'

import picWildfire from '../assets/images/wildfires.jpg'

const Wildfires = (props) => (
    <Layout>
        <Helmet>
            <title>Wild fires Loss</title>
            <meta name="description" content="Wild fires Loss" />
        </Helmet>

        <BannerWildfires />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Natural Disaster</h2>
                    </header>
                    <p>Wildfires are a devastating yet common natural disaster that causes billions of dollars in property damage and the loss of human life.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/wildfires" className="image">
                        <img src={picWildfire} alt="wild fire" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AI for Wildfires</h3>
                            </header>
                            <p>Our work with organizations on the front lines of natural disasters is creating inclusive solutions designed to help empower people everywhere.</p>
                        </div>
                    </div>
                </section>
               </section>
        </div>

    </Layout>
)

export default Wildfires