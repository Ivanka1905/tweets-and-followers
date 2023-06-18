import React from 'react';
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

const Card = ({ user, avatar, tweets, followers, id, onClick, myChoice }) => {
  const followersToString = String(followers);
  const concatString = `${followersToString.slice(
    0,
    followersToString.length - 3
  )},${followersToString.slice(
    followersToString.length - 3,
    followersToString.length
  )}`;

  const isFollowing = myChoice.find(u => u.userCardId === id);
  const isFollowingStyle = isFollowing ? { backgroundColor: '#5CD3A8' } : {};

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
        <Button
          type="button"
          onClick={onClick}
          data-id={id}
          value={user}
          style={isFollowingStyle}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardContentBottom>
    </CardItem>
  );
};

export default Card;
