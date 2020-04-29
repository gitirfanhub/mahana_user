import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal} from "react-bootstrap";
import './User.css'

function User()
{
// class User extends Component {
// 	constructor(props)
// 	{
// 		super(props);
// 		this.state = {

// 		}
// 	}

// 	render()
// 	{
		// const { onRouteChange } = this.props;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [masjidLastName, masLastNameFunc] = useState('Noor');
	const [masImamFirstName, FirstNameFunc] = useState(false); 
	const [masImamLastName, lastNameFunc] = useState(false);

	const onSubmitButton = () => {
		fetch('http://localhost:3000/user', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				masLstNm: masjidLastName
			})
		})
		.then(res => 
				res.json().then(data => 
							{
								FirstNameFunc(data[0].imamfstnm);
								lastNameFunc(data[0].imamlstnm); 
							}
					)
		)
	}

	return(
	<>
		<div className="container-fluid data">
			<div className="row" id="myHeader">
				<span className="order col-md-2">
					<img className="imageSize" src={require('../../img/content.png')} alt="content"/>
					Contents
				</span>
				<span className="order col-md-4">
					<span className="searchBox">
						<div className="inline">
							<img className="imageSize2" src={require('../../img/search.png')}  alt="search" />
						</div>
						<div className="inline">
							<input className="seacrhFont" type="text" name="search" value="" />
						</div>
					</span>
				</span>
			    <span className="order col-md-3">
			    </span>
			    <span className="order col-md-3">

				</span>
			</div>
			<div className="row color">
				<div className="col-md-1 block_one">
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/student.png')} alt="image1"/>
					</div>			
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/contact.png')} alt="image2"/>
					</div>			
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/student.png')} alt="image3"/>
					</div>				
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/contact.png')} alt="image1"/>
					</div>			
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/student.png')} alt="image2"/>
					</div>			
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/contact.png')} alt="image3"/>
					</div>				
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/student.png')} alt="image2"/>
					</div>			
					<div className="boxer_slide">
						<img className="imageSize" src={require('../../img/contact.png')} alt="image3"/>
					</div>		
				</div>
				<div className="row col-md-8 block_two">
					<div className=" row col-md-12 padding_block_two">
						<span className="col-md-2 box box1">
							<Button variant="primary" onClick={handleShow} onChange={onSubmitButton}>
								<img className="imgSzBox" src={require('../../img/masjid1.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid2.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid3.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid4.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid6.jpg')} alt="image4"/>
							</Button>
						</span>
					</div>
					<div className="row col-md-12">
						<span className="col-md-2 box box1">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid7.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid8.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid9.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid5.jpg')} alt="image4"/>
							</Button>
						</span>
						<span className="col-md-2 box">
							<Button variant="primary">
								<img className="imgSzBox" src={require('../../img/masjid1.jpg')} alt="image4"/>
							</Button>
						</span>
					</div>		
				</div>
				<div className="col-md-3 block_three">
					data
				</div>
			</div>		
		</div>

		<Modal className="modalStyle" show={show} onHide={handleClose}>
	        <Modal.Header closeButton>
	          	<Modal.Title>
	          		Modal heading
	          	</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	  			<div className=''>
	  				<input type="data" value={masImamFirstName}/>
	  			</div>
	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	          <Button variant="primary" onClick={handleClose}>
	            Save Changes
	          </Button>
	        </Modal.Footer>
	    </Modal>
    </>
  	);
}

export default User;

