import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, focus } from 'redux-form';
import { required, nonEmpty } from '../validators';
import Input from './input-field';
import { saveRoute, doneCreatingRoute } from '../actions/post-routes';


class NewRouteForm extends React.Component {
	onSubmit(values) {

		const newRoute = {
			name: values.name,
			description: values.description,
			path: this.props.path
		}
		return this.props.dispatch(saveRoute(newRoute));
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
      <form
				onSubmit={this.props.handleSubmit(values => {
					this.onSubmit(values)
					this.props.dispatch(doneCreatingRoute())
				})}
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
					// onClick={() => this.props.dispatch(doneCreatingRoute())}
          type="submit"
          disabled={this.props.pristine || this.props.submitting || !this.props.path.length}>
          Save Route
        </button>

				<span><button onClick={() => this.props.dispatch(doneCreatingRoute())}>
					Cancel
				</button></span>

      </form>
    )
  }
    
}

const mapStateToProps = state => {
	return {
		path: state.post.newRoute.path,	
		creatingRoute: state.post.creatingRoute
	}
}

NewRouteForm = connect(mapStateToProps)(NewRouteForm);

export default reduxForm({
    form: 'new route',
    onSubmitFail: (errors, dispatch) => {
			console.log('error is', errors)
			dispatch(focus('new route', Object.keys(errors)[0]))
		} 
})(NewRouteForm);
