/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import firebase from '../../DAL/firebase';
import Aux from "../hoc/Auxiliary";
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/tr';


class AddAppointment extends Component {
    state = {
        id: "",
        isFirst: "",
        isOnline: "",
        date: "",
        customerList: [],
        startDate: moment().format('D/MM/YYYY HH:mm')
    };



    componentDidMount() {
        moment().format();
        this.getCustomers();

        console.log(moment("Fri Dec 22 2017 00:00:00 GMT+0300 (+03)").format('D/MM/YYYY HH:mm'));

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
        ///debugger;
        const appointmentRef = firebase.database().ref("appointment");

        const appointmentItem = {
            id : this.state.id,
            date: this.state.date,
            isFirst : this.state.isFirst,
            isOnline : this.state.isOnline,
            isOver : "No"
        };

        console.log(" AppointmentItem: " + appointmentItem);
        appointmentRef.push(appointmentItem);
        alert("Successfully Added!");

        setTimeout(() => {
            window.location = "/add-appointment";
        }, 1000);
    };

    changeValue = (value, type) => {
        console.log(this.state);
        //debugger;
        if (type !== undefined) {
            if (type === "id") {
                return this.setState({id: value});
            } else if (type === "isFirst") {
                return this.setState({isFirst: value});
            } else if (type === "isOnline") {
                return  this.setState({isOnline: value});
            }
        } else {
            return  this.setState({date: moment(value._d.toString()).format('D/MM/YYYY HH:mm')});
        }
        console.log(this.state);
    };


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
                            <select className="form-control" id="gender" tabIndex="4"
                                    onChange={(event) => this.changeValue(event.target.value, "id")}>
                                <option value="None">Select...</option>
                                {customers}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Date </label>
                            <DateTime className="form-control"
                                      onChange={this.changeValue}>&nbsp;</DateTime>
                        </div>

                        <div className="form-group">
                            <label htmlFor="isfirst">First Visit? </label>
                            <select className="form-control" id="isfirst" tabIndex="4"
                                    onChange={(event) => this.changeValue(event.target.value, "isFirst")}>
                                <option value="None">Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                        </div>
                        <div className="form-group">
                            <label htmlFor="online">Online Appointment?</label>
                            <select className="form-control" id="online" tabIndex="4"
                                    onChange={(event) => this.changeValue(event.target.value, "isOnline")}>
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
                        <button className="btn btn-success" tabIndex="11" onClick={this.handleSubmit}><i
                            className="fa fa-plus">&nbsp;</i> Add Appointment
                        </button>
                        &nbsp;
                        <button className="btn btn-secondary" tabIndex="12"><i className="fa fa-refresh">&nbsp;</i>
                            Reset Form
                        </button>
                    </div>
                    <div className="clearfix"></div>
                    <div className="alert" id="message"></div>
                </div>
            </Aux>
        );
    }
}


export default AddAppointment;
