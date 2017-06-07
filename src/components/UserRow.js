import React from 'react';

let UserRow = (props) => (
    <div style={{ margin: 16 }}>
        <div><span style={{ fontWeight: "bold" }}>{ props.place }. { props.user.firstname }</span> { props.totalLength } km</div>
    </div>
)

export default UserRow
