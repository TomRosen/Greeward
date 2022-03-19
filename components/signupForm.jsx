import React from 'react';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fistname: '',
			lastname: '',
			email: '',
			password: '',
			confirmPassword: '',
			message: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { firstname, lastname, email, password, confirmPassword } =
			this.state;
		if (password !== confirmPassword) {
			this.setState({ message: 'Passwords do not match' });
			return;
		}
		await fetch('/api/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstname,
				lastname,
				email,
				password,
			}),
		}).catch((error) => {
			console.log(error.response?.data.message);
			this.setState({ message: error.response?.data.message });
		});
		this.props.callback();
	};

	handleCancel = (event) => {
		this.props.callback();
	};

	render() {
		return (
			<div>
				<a className='text-danger'>{this.state.message}</a>
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<label htmlFor='firstname'>Name</label>
						<input
							type='text'
							id='firstname'
							name='firstname'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='lastname'>Name</label>
						<input
							type='text'
							id='lastname'
							name='lastname'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<input
							type='password'
							id='confirmPassword'
							name='confirmPassword'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<button
						className='btn btn-primary mt-3 mb-4 form-control'
						type='submit'>
						Register
					</button>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
