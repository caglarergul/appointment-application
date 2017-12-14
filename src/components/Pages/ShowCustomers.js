/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import axios from '../../DAL/Database';
import Aux from "../hoc/Auxiliary";
import CustomerPartial from './Partial/CustomerPartial';

class ShowCustomers extends Component {
    state = {customerList: ""};


    componentDidMount() { // getting people from rest api w/ axios
        axios.get("/customer.json")
            .then(response => {
                this.setState({customerList: response.data});
                console.log(this.state.customerList);
                console.log(response[0]);
            })
            .catch(error => {
                this.setState({error: true});
            });



    }


    render() {
        const customers = Object.values(this.state.customerList).map((data, i) =>
          <CustomerPartial key={i} id={i} firstName={data.firstName} surname={data.surname}  gender={data.gender} phone={data.phone} />
        );

        return (
            <Aux>
                <h2>All Customers</h2>
                <br/>


                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Surname</th>
                        <th>Gender</th>

                        <th>Phone</th>
                        <th style={{width: "60px"}}>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers}
                    </tbody>
                </table>
            </Aux>
        );
    }
}


export default ShowCustomers;
