/**
 * Created by caglarergul on 26.12.2017.
 */
/**
 * Created by caglarergul on 14.12.2017.
 */
import React, {Component} from 'react';
import firebase from '../../DAL/firebase';
import Aux from "../hoc/Auxiliary";


class AppointmentDetails extends Component {
    state = {
        customerId: this.props.match.params.id,
        appointmentId: this.props.match.params.refid,
        customerList: [],
        personDetail: [],
        appointmentList: [],
        appointmentDetail: []
    };


    componentDidMount() {
       console.log(this.props.match.params.id);
        this.showExactCustomerHandler();
        this.showExactAppointment();
    }

    showExactAppointment = () => {
        const itemsRef = firebase.database().ref('appointment');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    cus_id : items[item].id,
                    date: items[item].date,
                    isFirst: items[item].isFirst,
                    isOnline: items[item].isOnline,
                    isOver: items[item].isOver
                });
            }
            this.setState({
                appointmentList: newState
            });
            console.log("Appointment List: "+ this.state.appointmentList);
            for (let i in this.state.appointmentList) {
                console.log("customerId: "+ this.state.personDetail.id + " - cus_id: "+this.state.appointmentList[i].cus_id)

                if (this.state.personDetail.id === this.state.appointmentList[i].cus_id) {
                    this.setState({appointmentDetail: this.state.appointmentList[i]});
                    console.log(this.state.appointmentDetail);
                }else {
                    console.log("bulamadık!");
                }
            }

        });
    };


    showExactCustomerHandler = () => {
        console.info("mounted");
        const itemsRef = firebase.database().ref('customer');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    cus_id : items[item].id,
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
                console.log("customerId: "+ this.state.customerId + " - cus_id: "+this.state.customerList[i].cus_id)

                if (this.state.customerId === this.state.customerList[i].cus_id) {
                    this.setState({personDetail: this.state.customerList[i]});
                    console.log(this.state.personDetail);
                }else {
                    console.log("bulamadık!");
                }
            }

        });
    };


    finishSubmitHandler = () => {
        this.state.appointmentDetail.isOver = "Yes";
        console.log(this.state.appointmentDetail);
       const itemsRef = firebase.database().ref('appointment');
        itemsRef
            .child(this.state.appointmentDetail.id)
            .update(this.state.appointmentDetail)
            .then(() => itemsRef.once('value'))
            .then(snapshot => snapshot.val())
            .catch(error => ({
                errorCode: error.code,
                errorMessage: error.message
            }));

        alert("Appointment is finished successfully!");

        setTimeout(() => {
            window.location = "/show-appointments";
        }, 1000);
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
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Appointment Information</h4>
                                <h6 className="card-subtitle mb-2 text-muted">All details in one page...</h6>

                                <table className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <th style={{width: '140px'}}>Date</th>
                                        <th style={{width: '30px'}}>:</th>
                                        <td>{this.state.appointmentDetail.date}</td>
                                    </tr>
                                    <tr>
                                        <th>First Appointment?</th>
                                        <th>:</th>
                                        <td>{this.state.appointmentDetail.isFirst}</td>
                                    </tr>
                                    <tr>
                                        <th>Online Appointment?</th>
                                        <th>:</th>
                                        <td>{this.state.appointmentDetail.isOnline}</td>
                                    </tr>
                                    <tr>
                                        <th>Appointment Finished?</th>
                                        <th>:</th>
                                        <td>{this.state.appointmentDetail.isOver}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="clearfix" style={{marginTop:"30px"}}>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={this.finishSubmitHandler}><i className="fa fa-check"></i> Finish Appointment</button>
                                <button className="btn btn-outline-primary"><i className="fa fa-edit"></i> Add Note</button>
                                <button className="btn btn-outline-danger"><i className="fa fa-times"></i> Delete Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}


export default AppointmentDetails;



