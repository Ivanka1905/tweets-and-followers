import React, { useEffect, useState } from 'react';

import {
  CardItem,
  CardContentBottom,
  CardContentTop,
  Line,
  List,
  Button,
  Circle,
} from './Card.styled';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import {
  addSubscription,
  getSubscriptions,
} from 'components/services/usersApi';

const Card = ({ user, avatar, tweets, followers, id }) => {
    const [myChoice, setMyChoice] = useState([])
  const followersToString = String(followers);
  const concatString = `${followersToString.slice(
    0,
    followersToString.length - 3
  )},${followersToString.slice(
    followersToString.length - 3,
    followersToString.length
  )}`;
  //   console.log(concatString)

//   useEffect(() => {
//     getSubscriptions();
//   }, [myChoice]);

  const handleClick = e => {
    const userCardId = e.currentTarget.dataset.id;
    const name = e.currentTarget.value;
    console.log({ userCardId, name });
      addSubscription({ userCardId, name });
      setMyChoice({ userCardId, name })
    //    getSubscriptions()
  };

  //   console.log(id);
  return (
    <CardItem>
      <CardContentTop>
        <Logo />
      </CardContentTop>
      <Line>
        <Circle>
          <img src={avatar} alt={user} width="64px" height="64px" />
        </Circle>
      </Line>
      <CardContentBottom>
        <List>
          <li>{tweets} tweets</li>
          <li>{concatString} Followers</li>
        </List>
        <Button type="button" onClick={handleClick} data-id={id} value={user}>
          Follow
        </Button>
      </CardContentBottom>
    </CardItem>
  );
};

export default Card;
