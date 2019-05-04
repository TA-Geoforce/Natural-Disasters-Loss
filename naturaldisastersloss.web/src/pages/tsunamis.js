import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTsunamis from '../components/tsunamis/BannerTsunamis'

import picTsunamis from '../assets/images/tsunamis.jpg'

const Tsunamis = (props) => (
    <Layout>
        <Helmet>
            <title>Tsunamis Loss</title>
            <meta name="description" content="Tsunamis Loss" />
        </Helmet>

        <BannerTsunamis />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Natural Disaster</h2>
                    </header>
                    <p>Tsunamis are a devastating yet common natural disaster that causes billions of dollars in property damage and the loss of human life.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/tsunamis" className="image">
                        <img src={picTsunamis} alt="tsunamis" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AI for Tsunamis</h3>
                            </header>
                            <p>Our work with organizations on the front lines of natural disatsers is creating inclusive solutions designed to help empower people everywhere.</p>
                        </div>
                    </div>
                </section>
               </section>
        </div>

    </Layout>
)

export default Tsunamis