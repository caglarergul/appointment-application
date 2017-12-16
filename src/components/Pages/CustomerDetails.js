/**
 * Created by caglarergul on 14.12.2017.
 */
import React, {Component} from 'react';
import firebase from '../../DAL/firebase';
import Aux from "../hoc/Auxiliary";


class CustomerDetails extends Component {
    state = {
        customerId: this.props.match.params.id, //  //,
        customerList: [],
        personDetail: []
    };


    componentDidMount() {

       this.showExactCustomerHandler();

    }
    showExactCustomerHandler = () => {
        console.info("mounted");
        const itemsRef = firebase.database().ref('customer');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    firstName: items[item].firstName,
                    surname: items[item].surname,
                    age: items[item].age,
                    gender: items[item].gender,
                    phone: items[item].phone,
                    weight: items[item].weight,
                    height: items[item].height,
                    targetWeight: items[item].targetWeight,
                    disease: items[item].disease,
                    address: items[item].address
                });
            }
            this.setState({
                customerList: newState
            });
            console.log(this.state.customerList);
            for (let i in this.state.customerList) {
                if (this.state.customerId === this.state.customerList[i].id) {
                    this.setState({personDetail: this.state.customerList[i]});
                    console.log(this.state.personDetail);
                }
            }

        });
    };
    render() {


        return (
            <Aux>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Customer Information</h4>
                                <h6 className="card-subtitle mb-2 text-muted">All details in one page...</h6>

                                <table className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <th style={{width: '140px'}}>Firstname</th>
                                        <th style={{width: '30px'}}>:</th>
                                        <td>{this.state.personDetail.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Surname</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.surname}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.gender}</td>
                                    </tr>
                                    <tr>
                                        <th>Age</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.age}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Weight</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.weight}</td>
                                    </tr>
                                    <tr>
                                        <th>Height</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.height}</td>
                                    </tr>
                                    <tr>
                                        <th>Target Weight</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.targetWeight}</td>
                                    </tr>
                                    <tr>
                                        <th>Disease</th>
                                        <th>:</th>
                                        <td>{this.state.personDetail.disease}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </Aux>
        );
    }
}


export default CustomerDetails;



