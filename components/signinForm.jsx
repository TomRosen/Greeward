import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			providers: [],
			message: '',
		};
		console.log(this.props.csrfToken);
		getProviders().then((value) => this.setState({ providers: value }));
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleCancel = (event) => {
		this.props.callback();
	};

	render() {
		return (
			<div>
				<a className='text-danger'>
					{this.props.error && <SignInError error={this.props.error} />}
				</a>
				<form className='mb-4 mt-4' method='post'>
					<div className='form-group'>
						<label htmlFor='Email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<div className='form-group'>
						<label htmlFor='Password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							required
							className='form-control'
							onChange={this.handleChange}></input>
					</div>
					<button
						className='btn btn-primary mt-3 form-control'
						type='submit'
						onClick={() =>
							signIn('credentials', {
								email: this.state.email,
								password: this.state.password,
							})
						}>
						Signin
					</button>
				</form>
				{this.state.providers?.github && (
					<div>
						<hr></hr>
						<button
							type='button'
							className='btn btn-primary form-control mt-2 mb-2'
							onClick={() => signIn(this.state.providers?.github.id)}>
							GitHub Login
						</button>
					</div>
				)}
				{this.state.providers?.google && (
					<div>
						<hr></hr>
						<button
							type='button'
							className='btn btn-primary form-control mt-2'
							onClick={() => signIn(this.state.providers?.google.id)}>
							Google Login
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default SignInForm;

const errors = {
	Signin: 'Try signing with a different account.',
	OAuthSignin: 'Try signing with a different account.',
	OAuthCallback: 'Try signing with a different account.',
	OAuthCreateAccount: 'Try signing with a different account.',
	EmailCreateAccount: 'Try signing with a different account.',
	Callback: 'Try signing with a different account.',
	OAuthAccountNotLinked:
		'To confirm your identity, sign in with the same account you used originally.',
	EmailSignin: 'Check your email address.',
	CredentialsSignin:
		'Sign in failed. Check the details you provided are correct.',
	default: 'Unable to sign in.',
};
const SignInError = ({ error }) => {
	const errorMessage = error && (errors[error] ?? errors.default);
	return <div>{errorMessage}</div>;
};
