/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import firebase from '../../DAL/firebase';
import Aux from "../hoc/Auxiliary";
import DatePicker from 'react-datepicker';
import moment from 'moment';


import 'react-datepicker/dist/react-datepicker.css';

class AddAppointment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            appointmentList : {
               // date : this.props.date,
                userid : this.props.userid,
                isFirst : this.props.isFirst,
                isOnline: this.props.isOnline
            },
            customerList : [],
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.getCustomers();

    }


    getCustomers = () => {

        const rows = firebase.database().ref('customer');
        rows.on('value', (snapshot) => {
            let items = snapshot.val();
            let newStateCustomer = [];
            for (let item in items) {
                newStateCustomer.push({
                    id: item,
                    uid: items[item].id,
                    refid: item,
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
                customerList: newStateCustomer
            });

            console.log(this.state.customerList);

        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const appointmentRef = firebase.database().ref("appointment");

        const appointmentItem = {
            //date : this.state.date, date is undefined. we should solve this problem.
            userid : this.state.userid,
            isFirst : this.state.isFirst,
            isOnline: this.state.isOnline
        };
        debugger;
        console.log(appointmentItem);
        appointmentRef.push(appointmentItem);
        alert("Successfully Added!");

        setTimeout(() => {
            window.location = "/show-customers";
        }, 1000);
    };

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {

        let customers = this.state.customerList.map(data =>
            <option key={data.id} value={data.id}>{data.firstName + " " + data.surname}</option>
        );

        return (
            <Aux>
                <h2>Add a new appointment</h2>
                <br/>
                <div className="row">
                    <div className="col-lg-2">&nbsp;</div>
                    <div className="col-lg-8  col-xs-12">
                        <div className="form-group">
                            <label htmlFor="name">Select a customer </label>
                            <select className="form-control" id="gender" tabIndex="4" onChange={(event) => this.setState({userid: event.target.value})}>
                                <option value="None">Select...</option>
                                {customers}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Date </label>
                            <DatePicker selected={this.state.startDate}  className="form-control" value="15-Dec 17:47" timeIntervals={15} showTimeSelect  timeFormat="HH:mm" dateFormat="DD-MMM HH:mm" onSelect={this.handleChange}>&nbsp;</DatePicker>
                        </div>

                        <div className="form-group">
                            <label htmlFor="isfirst">First Visit? </label>
                            <select className="form-control" id="isfirst" tabIndex="4" onChange={(event) => this.setState({isFirst: event.target.value})}>
                                <option value="None">Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>



                        </div>
                        <div className="form-group">
                            <label htmlFor="online">Online Appointment?</label>
                            <select className="form-control" id="online" tabIndex="4" onChange={(event) => this.setState({isOnline: event.target.value})}>
                                <option value="None">Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-lg-2">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-success" tabIndex="11" onClick={this.handleSubmit}><i className="fa fa-plus">&nbsp;</i> Add Appointment</button>
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



export default AddAppointment;
