/**
 * Created by caglarergul on 14.12.2017.
 */
import React, {Component} from 'react';
import axios from '../../DAL/Database';
import Person from './Partial/Person';

class CustomerDetails extends Component {
    state = {
        customerId: this.props.match.params.id,
        customerList: []
    };

    componentDidMount() {
        axios.get("/customer.json")
            .then(response => {
                this.setState({customerList: response.data});
                console.log(response.data);

            })
            .catch(error => {
                this.setState({error: true});
            });

    }

    render() {
        //this.state.personEmbed = Object.values(this.state.customerList).map((data, i) =>
          //  <Person key={i} id={data.id} selectedid={this.state.customerId} firstName={data.firstName} surname={data.surname} gender={data.gender}  phone={data.phone}/>

        return (
            <div>

                Customer Details id: {this.state.customerId}
            </div>
        );
    }
}


export default CustomerDetails;



