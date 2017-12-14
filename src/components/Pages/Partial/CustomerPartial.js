import React from 'react';


const customerPartial = (props) => (
    <tr>

        <th scope="row">{props.firstName}</th>
        <td>{props.surname}</td>
        <td>{props.gender}</td>
        <td>{props.age}</td>
        <td>{props.phone}</td>
    </tr>
);

export default customerPartial;