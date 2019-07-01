 import React from 'react';

const Avatarlist = (props) => {
  return (
    <div className="avatar-style ma3 w-20">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
      <h1> {props.name}</h1>
      <p>{props.work}</p>
    </div>
  )
}

export default Avatarlist;
