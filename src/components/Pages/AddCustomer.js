/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import axios from '../../DAL/Database';
import Aux from "../hoc/Auxiliary";

class AddCustomer extends Component {


    state = {
        id : null,
        firstName: this.props.firstName,
        surname: this.props.surname,
        age: this.props.age,
        weight: this.props.weight,
        height: this.props.height,
        targetWeight: this.props.targetWeight,
        gender: this.props.gender,
        disease: this.props.disease,
        phone: this.props.phone,
        address: this.props.address
    };

    addCustomerHandler = () => {

        const customerData = {
            id: Math.round(Math.random()*10000),
            firstName: this.state.firstName,
            surname: this.state.surname,
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height,
            targetWeight: this.state.targetWeight,
            disease: this.state.disease,
            gender : this.state.gender,
            phone: this.state.phone,
            address: this.state.address
        };


        axios.post('/customer.json', customerData)
            .then(response => {

                console.log(response);
                document.getElementById("message").innerHTML("Successfull");


            })
            .catch(error => {
                console.log("Error: "+error);
            });
    };

    render() {
        return (
           <Aux>
               <h2>Add a new customer</h2>
               <br/>
               <div className="row">
                   <div className="col-lg-6 float-lg-left col-xs-12">
                       <div className="form-group">
                           <label htmlFor="name">Name </label>
                           <input type="text" id="name" className="form-control input-lg" tabIndex="1"  onChange={(event) => this.setState({firstName: event.target.value})}/>

                       </div>
                       <div className="form-group">
                           <label htmlFor="surname">Surname </label>
                           <input type="text" id="surname" className="form-control" tabIndex="2" onChange={(event) => this.setState({surname: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="age">Age </label>
                           <input type="text" id="age" className="form-control" tabIndex="3" onChangeCapture={(event) => this.setState({gender: event.target.value}) }/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="gender">Gender </label>
                           <select className="form-control" id="gender" tabIndex="4" onChange={(event) => this.setState({gender: event.target.value})}>
                               <option value="None">Select...</option>
                               <option value="Male">Male</option>
                               <option value="Female">Female</option>
                               <option value="Other">Other</option>
                           </select>



                       </div>
                       <div className="form-group">
                           <label htmlFor="phone">Phone Number </label>
                           <input type="text" id="phone" className="form-control" tabIndex="5" onChange={(event) => this.setState({phone: event.target.value})}/>
                       </div>
                   </div>

                   <div className="col float-lg-right col-xs-12">
                       <div className="form-group">
                           <label htmlFor="Address">Address </label>
                           <input type="text" id="Address" className="form-control" tabIndex="6" onChange={(event) => this.setState({address: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Weight">Weight </label>
                           <input type="text" id="Weight" className="form-control" tabIndex="7" onChange={(event) => this.setState({weight: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Height">Height </label>
                           <input type="text" id="Height" className="form-control" tabIndex="8" onChange={(event) => this.setState({height: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Target">Target Weight </label>
                           <input type="text" id="Target" className="form-control" tabIndex="9" onChange={(event) => this.setState({targetWeight: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="disease">Disease </label>
                           <input type="text" id="disease" className="form-control" tabIndex="10" onChange={(event) => this.setState({disease: event.target.value})}/>
                       </div>
                   </div>

               </div>
               <div className="row">
                   <div className="col text-right">
                       <button className="btn btn-success" tabIndex="11" onClick={this.addCustomerHandler}><i className="fa fa-plus">&nbsp;</i> Add Customer</button>
                       &nbsp;
                       <button className="btn btn-secondary"  tabIndex="12"><i className="fa fa-refresh">&nbsp;</i> Reset Form</button>
                   </div>
                   <div className="clearfix"></div>
                   <div className="alert" id="message"></div>
               </div>
           </Aux>
        );
    }
}


export default AddCustomer;
