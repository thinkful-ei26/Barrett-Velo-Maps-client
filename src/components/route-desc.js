import React from 'react';
import { connect } from 'react-redux';
import '../styles/route-description.css';

function RouteDecription(props) {
    if (!props.route.name) {
        return ('');
    }
    return(
        <section className="route-description-section">
            <h3>{props.route.name}</h3>
            <p className="route-description-par">{props.route.description}</p>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        route: state.get.currentRoute
    }
}

export default connect(mapStateToProps)(RouteDecription);