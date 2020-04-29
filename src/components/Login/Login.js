import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
    	this.setState({email: event.target.value})
  	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitLoginIn = () => {
		fetch('http://localhost:3000/login', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user)
					this.props.onRouteChange('admin');
				}
			})
	}


	render() 
	{
		const { onRouteChange } = this.props;
		return(
			<div className="container-fluid data">
				<div className="row bodyView">
					<div className="col-md-4">
					
					</div>
					<div className="col-md-4 posBox boxModal">	
						<div className="boxRowFont">
							<label className="labelFont">
								<img className="imageSize" src={require('../../img/mail.png')} alt="mail" />
								EmailID	 
							</label>
							<input 
								className="inputFont" 
								type="email" 
								name="email" 
								onChange={this.onEmailChange} 
							/>
						</div>		
						<div className="boxRowFont">
							<label className="labelFont">
								<img className="imageSize" src={require('../../img/password.png')} alt='password'/>
								Password 
							</label>
							<input 
								className="inputFont" 
								type="password" 
								name="password" 
								onChange={this.onPasswordChange}
						    />
						</div>					
						<div className="boxRowFont">
							<label className="labelFont">
								<input 
									onClick={this.onSubmitLoginIn}
									className="inputFont" 
									type="submit" 
									value="LogIn"
								/>
							</label>
						</div>
					</div>

					<div className="col-md-4">
						<div>
							<label onClick={() => onRouteChange('register')} className="buttonFont">
								Register
							</label> 
							<label onClick={() => onRouteChange('user')} className="buttonFont">
								User
							</label> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;