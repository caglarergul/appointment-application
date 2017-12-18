import React from 'react';
// import {NavLink} from 'react-router-dom';


const appointmentPartial = (props) => (
    <tr>
        <th>{props.nameSurname}</th>
        <th scope="row">{props.user_id}</th>
        <td>{props.date}</td>
        <td>{props.isFirst}</td>
        <td>{props.isOnline}</td>
        <td><a href={"/appointments/"+props.refid}  className="btn btn-primary btn-sm"> Show <i className="fa fa-caret-right"></i></a>
        </td>
    </tr>
);

export default appointmentPartial