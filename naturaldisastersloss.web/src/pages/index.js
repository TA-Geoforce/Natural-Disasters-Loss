import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import tornadoe from '../assets/images/tornadoe.jpg'
import flood from '../assets/images/floods.jpg'
import wildfire from '../assets/images/wildfires.jpg'
import volcanoe from '../assets/images/volcanoes.jpg'
import tsunami from '../assets/images/tsunamis.jpg'
import earthquake from '../assets/images/earthquakes.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Natural Disasters Loss"
                    meta={[
                        { name: 'description', content: 'Natural Disaster Loss is a platform of predictive analytics service for natural disasters' },
                        { name: 'keywords', content: 'natural, disasters, remote sensing, ai, machine learning, big data, earth observation' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="services" className="tiles">
                        <article style={{backgroundImage: `url(${flood})`}}>
                            <header className="major">
                                <h3>Floods</h3>
                                <p>Calculate the loss from floods</p>
                            </header>
                            <Link to="/floods" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${tornadoe})`}}>
                            <header className="major">
                                <h3>Tornadoes</h3>
                                <p>Calculate the tornadoes loss</p>
                            </header>
                            <Link to="/tornadoes" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${wildfire})`}}>
                            <header className="major">
                                <h3>Wildfires</h3>
                                <p>Calculate the loss from wildfires</p>
                            </header>
                            <Link to="/wildfires" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${volcanoe})`}}>
                            <header className="major">
                                <h3>Volcanoes</h3>
                                <p>Calculate the loss from volcanoes</p>
                            </header>
                            <Link to="/volcanoes" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${tsunami})`}}>
                            <header className="major">
                                <h3>Tsunamis</h3>
                                <p>Calculate the loss from tsunamis</p>
                            </header>
                            <Link to="/tsunamis" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${earthquake})`}}>
                            <header className="major">
                                <h3>Earthquakes</h3>
                                <p>Calculate the loss from earthquake</p>
                            </header>
                            <Link to="/earthquakes" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>AI for preparing natural disasters</h2>
                            </header>
                            <p>Natural disasters </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button next">More info</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <Contact />
            </Layout>
        )
    }
}

export default HomeIndex