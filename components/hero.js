import PropTypes from "prop-types"

export default function Hero(props) {
    return (
        <div className="min-vh-100 bg-dark">
            {props.children}
        </div>
    )
}

Hero.propTypes = {

}