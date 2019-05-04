import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFloods from '../components/floods/BannerFloods'

import picflood from '../assets/images/floods.jpg'

const Floods = (props) => (
    <Layout>
        <Helmet>
            <title>Floods Loss</title>
            <meta name="description" content="Floods Loss" />
        </Helmet>

        <BannerFloods />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Natural Disaster</h2>
                    </header>
                    <p>Floods are a devastating yet common natural disaster that causes billions of dollars in property damage and the loss of human life.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/floods" className="image">
                        <img src={picflood} alt="flood" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AI for Floods</h3>
                            </header>
                            <p>Our work with organizations on the front lines of natural disasters is creating inclusive solutions designed to help empower people everywhere.</p>
                        </div>
                    </div>
                </section>
               </section>
        </div>

    </Layout>
)

export default Floods