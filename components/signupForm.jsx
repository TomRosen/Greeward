import React from 'react';
import Button from "@/components/Button";

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
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const {firstname, lastname, email, password, confirmPassword} =
            this.state;
        if (password !== confirmPassword) {
            this.setState({message: 'Passwords do not match'});
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
            this.setState({message: error.response?.data.message});
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
                <form onSubmit={this.handleSubmit} className='my-10 max-w-lg mx-auto px-4'>
                    <div className='pb-5'>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First
                            Name</label>
                        <div className="mt-1">
                            <input type="text"
                                   onChange={this.handleChange}
                                   required
                                   id='firstname'
                                   name='firstname'
                                   className="shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-sm border-gray-300 rounded-md"
                                   placeholder="Max"/>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <div className="mt-1">
                            <input type="text"
                                   onChange={this.handleChange}
                                   required
                                   name='lastname'
                                   id='lastname'
                                   className="shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-sm border-gray-300 rounded-md"
                                   placeholder="Müsli"/>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1">
                            <input type="email"
                                   onChange={this.handleChange}
                                   required
                                   name='email'
                                   id='email'
                                   className="shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-sm border-gray-300 rounded-md"
                                   placeholder="max@muesli.de"/>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1">
                            <input type="password"
                                   onChange={this.handleChange}
                                   required
                                   name='password'
                                   id='password'
                                   className="shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-sm border-gray-300 rounded-md"
                                   placeholder="****"/>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm
                            Password</label>
                        <div className="mt-1">
                            <input type="password"
                                   onChange={this.handleChange}
                                   required
                                   name='confirmPassword'
                                   id='confirmPassword'
                                   className="shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-sm border-gray-300 rounded-md"
                                   placeholder="****"/>
                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <Button text={'Register'}></Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
