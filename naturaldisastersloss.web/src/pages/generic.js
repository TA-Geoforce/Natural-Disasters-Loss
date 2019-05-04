import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import pic11 from "../assets/images/Natural-disasters.jpg";

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Natural Disasters Loss using AI</title>
      <meta name="description" content="Natural Disasters Loss using AI" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Natural Disaster Loss</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            <b>Natural Disasters Loss</b> provides AI services for predicting
            the impact of natural disasters to the local economy. Direct losses
            result from the destruction of assets from the initial impact of the
            tornadoes, volcanoes, earthquakes, wildfires, floods and tsunamis
             and include the loss of human lives, roads, power and phone
            lines, crops, factories, homes, and natural resources. While costs
            are harder to estimate than direct losses, indirect losses that
            occur from the destruction of physical assets can be quite
            significant. These losses include lost production and sales, incomes
            and labor time, increased commute times and transportation costs
            from goods having to be rerouted, decreased tourist activity, and
            utility disruptions. The decreased economic activity also results in
            lost taxable receipts and uses up federal disaster relief funds in
            order to help clean-up, repair, and replace lost assets.
          </p>
          <p>
            <b>Natural Disasters Loss</b> is a AI tool that can be used from
            local goverments to private sector (insurance, construction etc.).
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Generic;
