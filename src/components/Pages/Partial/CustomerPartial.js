import React from 'react';
// import {NavLink} from 'react-router-dom';


const customerPartial = (props) => (
    <tr>
        <th>{props.id}</th>
        <th scope="row">{props.firstName}</th>
        <td>{props.surname}</td>
        <td>{props.gender}</td>
        <td>{props.phone}</td>
        <td><a href={"/customer/"+props.refid}  className="btn btn-primary btn-sm"> Show <i className="fa fa-caret-right"></i></a>
        </td>
    </tr>
);

export default customerPartial;