import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = (props) => {
  const AvatarlistArray = [
    {
      id: 1,
      name: "Gitto",
      work: "WD"
    },
    {
      id: 2,
      name: "Fedrico",
      work: "PWD"
    },
    {
      id: 3,
      name: "Luica",
      work: "SE"
    },
    {
      id: 4,
      name: "Smith",
      work: "TDM"
    }
  ]

  // Map in react
  //map (callback(currentvalue, index, array) arg)
  const arrayAvatarCard = AvatarlistArray.map ( (avatarcard, i) => {
    return <Avatarlist id={AvatarlistArray[i].id} name={AvatarlistArray[i].name} work={AvatarlistArray[i].work}/>
  })

  return (
    <div className="tc">
      <h1>Simple React Project</h1>
      <div class="avator-style w-100 pa3">
        {arrayAvatarCard}
      </div>
      <button>Click here!!</button>
    </div>
  )
}

export default Avatar;
