import React from 'react';
import { connect } from 'react-redux';

function RouteDecription(props) {
    return(
        <div>
            <h3>{props.route.name}</h3>
            <p>{props.route.description}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        route: state.get.route
    }
}

export default connect(mapStateToProps)(RouteDecription);