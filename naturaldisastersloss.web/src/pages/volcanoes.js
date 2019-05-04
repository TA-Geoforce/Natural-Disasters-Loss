import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerVolcanoes from '../components/volcanoes/BannerVolcanoes'

import picVolcanoes from '../assets/images/volcanoes.jpg'

const Volcanoes = (props) => (
    <Layout>
        <Helmet>
            <title>Volcanoes Loss</title>
            <meta name="description" content="Volcanoes Loss" />
        </Helmet>

        <BannerVolcanoes />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Natural Disaster</h2>
                    </header>
                    <p>Volcanoes are a devastating yet common natural disaster that causes billions of dollars in property damage and the loss of human life.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/volcanoes" className="image">
                        <img src={picVolcanoes} alt="Volcanoe" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AI for Volcanoes</h3>
                            </header>
                            <p>Our work with organizations on the front lines of natural disasters is creating inclusive solutions designed to help empower people everywhere.</p>
                        </div>
                    </div>
                </section>
               </section>
        </div>

    </Layout>
)

export default Volcanoes