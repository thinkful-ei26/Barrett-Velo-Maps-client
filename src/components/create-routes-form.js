import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import { required, nonEmpty } from '../validators';
import Input from './input-field';
import { saveNewRouteInput } from '../actions/post-routes';


class NewRouteForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(saveNewRouteInput(values));
  }

  render() {

		let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Route submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
				}
				
    return (
      // form goes here, still need validators and error messages, and a fetch(post)
      <form
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}
      >
				{successMessage}
        {errorMessage}
				<Field 
					name="name"
					type="text"
					component={Input}
					label="Route Name"
					validate={[required, nonEmpty]}
				/>

				<Field 
					component={Input}
					name="description"
					type="text"
					label="Route Description"
				/>

				<button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Save Route
        </button>

      </form>
    )
  }
    
}

export default reduxForm({
    form: 'new route',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('new route', Object.keys(errors)[0]))
})(NewRouteForm);
