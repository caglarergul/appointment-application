/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import firebase from '../../DAL/firebase';

class AddAppointment extends Component {

    state = {
      appointmentList : {
          id : this.props.id,
          date : this.props.date,
          userId : this.props.userId,
          isFirst : this.props.isFirst,
          startingWeight: this.props.startingWeight,
          targetWeight : this.props.targetWeight,
          bmi : this.state.bmi,
          basalMetabolicRate : this.state.basalMetabolicRate,
          isOnline: this.isOnline
      }
    };

    componentDidMount() {
        const appointmentRef = firebase.database().ref("appointment");

        const appointmentItem = {
            id : this.state.id,
            date : this.state.date,
            userId : this.state.userId,
            isFirst : this.state.isFirst,
            startingWeight: this.state.startingWeight,
            targetWeight : this.state.targetWeight,
            bmi : this.state.bmi,
            basalMetabolicRate : this.state.basalMetabolicRate,
            isOnline: this.state.isOnline
        };
        appointmentRef.push(appointmentItem);
        this.setState({});
    }

    render() {
        return (
            <div>
                Add a new Appointment
            </div>
        );
    }
}



export default AddAppointment;
