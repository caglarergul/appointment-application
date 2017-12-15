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
                id : this.props.id,
                date : this.props.date,
                userId : this.props.userId,
                isFirst : this.props.isFirst,
                startingWeight: this.props.startingWeight,
                targetWeight : this.props.targetWeight,
                isOnline: this.props.isOnline
            },
            customerList : [],
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
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
            id : this.state.id,
            date : this.state.date,
            userId : this.state.userId,
            isFirst : this.state.isFirst,
            isOnline: this.state.isOnline
        };
        appointmentRef.push(appointmentItem);
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
                    <div className="col-lg-6 float-lg-left col-xs-12">
                        <div className="form-group">
                            <label htmlFor="name">Select a customer </label>
                            <select className="form-control" id="gender" tabIndex="4" onChange={(event) => this.setState({userid: event.target.value})}>
                                <option value="None">Select...</option>
                                {customers}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Date </label>
                            <DatePicker selected={this.state.startDate} className="form-control" timeIntervals={15} showTimeSelect  timeFormat="HH:mm" dateFormat="DD-MMM HH:mm" onSelect={this.handleChange}>&nbsp;</DatePicker>
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
                        <button className="btn btn-success" tabIndex="11" onClick={this.handleSubmit}><i className="fa fa-plus">&nbsp;</i> Add Customer</button>
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
