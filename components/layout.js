import PropTypes from 'prop-types'

import Nav from './nav'

export default function Layout(props) {

    return (
        <>
            <Nav />
            {props.children}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

