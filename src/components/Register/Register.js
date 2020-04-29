import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

class Register extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}


	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
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
								<img className="imageSize" src={require('../../img/username.png')} alt="username" />
								Name 
							</label>
							<input 
								className="inputFont" 
								type="text" 
								name="name" 
								onChange={this.onNameChange}
							/>
						</div>			
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
								<img className="imageSize" src={require('../../img/password.png')} alt="password" />
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
								onClick={this.onSubmitRegister}
								className="inputFont" 
								type="submit" 
								name="submit" 
								value="Register"
						    />
							</label>
								 
						</div>
					</div>
					<div className="col-md-4">
						<div>
							<label onClick={() => onRouteChange('login')} className="buttonFont">
								Login 
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

export default Register;