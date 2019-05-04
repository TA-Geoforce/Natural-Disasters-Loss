import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/tornadoes">Tornadoes</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/earthquakes">Earthquakes</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/wildfires">Wildfires</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/tsunamis">Tsunamis</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/volcanoes">Volcanoes</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/floods">Floods</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
