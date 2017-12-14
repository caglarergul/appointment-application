/**
 * Created by caglarergul on 14.12.2017.
 */
import React, {Component} from 'react';
import axios from '../../DAL/Database';

class CustomerDetails extends Component {
    state = {
      customerId : this.props.match.params.id
    };

    componentDidMount () {
        axios.get("/customer.json")
            .then(response => {
                this.setState({customerList: response.data});
                console.log(this.state.customerList);

            })
            .catch(error => {
                this.setState({error: true});
            });

    }

    render() {
        return (
            <div>
                Customer Details id: {}
            </div>
        );
    }
}



export default CustomerDetails;
