import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';

class newRouteForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    return (
        // form goes here, still need validators and error messages, and a fetch(post)
    )
}

export default reduxForm({
    form: 'new route',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('new route', Object.keys(errors)[0]))
})(newRouteForm);
