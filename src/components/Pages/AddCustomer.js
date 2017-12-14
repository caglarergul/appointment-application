/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import axios from '../../DAL/Database';
import Aux from "../hoc/Auxiliary";

class AddCustomer extends Component {


    state = {
        firstName: this.props.firstName,
        surname: this.props.surname,
        age: this.props.age,
        weight: this.props.weight,
        height: this.props.height,
        targetWeight: this.props.targetWeight
    };

    addCustomerHandler = () => {
        const customerData = {
            firstName: this.state.firstName,
            surname: this.state.surname,
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height,
            targetWeight: this.state.targetWeight,
            disease: this.state.disease
        };


        axios.post('/customer.json', customerData)
            .then(response => {
                console.log(response)
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
                           <input type="text" id="age" className="form-control" tabIndex="3" onChange={(event) => this.setState({age: event.target.value})}/>
                       </div>
                   </div>

                   <div className="col float-lg-right col-xs-12">
                       <div className="form-group">
                           <label htmlFor="Weight">Weight </label>
                           <input type="text" id="Weight" className="form-control" tabIndex="4" onChange={(event) => this.setState({weight: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Height">Height </label>
                           <input type="text" id="Height" className="form-control" tabIndex="5" onChange={(event) => this.setState({height: event.target.value})}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="Target">Target Weight </label>
                           <input type="text" id="Target" className="form-control" tabIndex="6" onChange={(event) => this.setState({targetWeight: event.target.value})}/>
                       </div>
                   </div>

               </div>
               <div className="row">
                   <div className="col text-right">
                       <button className="btn btn-success" tabIndex="7" onClick={this.addCustomerHandler}><i className="fa fa-plus">&nbsp;</i> Add Customer</button>
                       &nbsp;
                       <button className="btn btn-secondary"  tabIndex="8"><i className="fa fa-refresh">&nbsp;</i> Reset Form</button>
                   </div>
               </div>
           </Aux>
        );
    }
}


export default AddCustomer;
