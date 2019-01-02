import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import { required, nonEmpty } from '../validators';
import Input from './input-field';
// import {  } from '../actions/post-routes';


class NewRouteForm extends React.Component {
  // onChange(values) {
	// 	console.log(values.name);
	// 	// const name = values.name;
	// 	let nameValue;
	// 	let descriptionValue;
	// 	if (values.name === 'name') {
	// 		nameValue = values.value;
	// 		console.log(nameValue)
	// 	} else if (values.name === 'description') {
	// 		descriptionValue = values.value;
	// 		console.log(descriptionValue);
	// 	}

	// 	let valuesObj = {
	// 		name: nameValue,
	// 		description: descriptionValue
	// 	}

	// 	console.log(valuesObj);
	// 	// this.props.dispatch(saveNewRouteInput(valuesObj));
	// 	// console.log(values);
	// }
	
	onSubmit(values) {

		const newRoute = {
			name: values.name,
			description: values.description,
			path: this.props.path
		}
		
		// this.props.dispatch(saveNewRouteInput(values));
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
				onSubmit={this.props.handleSubmit(values =>{
					this.onSubmit(values)
				}
					
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
          disabled={this.props.pristine || this.props.submitting || !this.props.path.length}>
          Save Route
        </button>

      </form>
    )
  }
    
}

const mapStateToProps = state => {
	return {
		path: state.post.route.path,	
	}
}

NewRouteForm = connect(mapStateToProps)(NewRouteForm);

export default reduxForm({
    form: 'new route',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('new route', Object.keys(errors)[0]))
})(NewRouteForm);
