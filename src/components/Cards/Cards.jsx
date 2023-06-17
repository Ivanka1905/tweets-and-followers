import Card from 'components/Card/Card';
import { getAll } from 'components/services/usersApi';
import React, { useEffect, useState } from 'react';
import { Container, Box } from './Cards.styled';

const Cards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAll();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

    //  const handleClick = (e) => {
    //    const cardId = e.currentTarget.dataset.id;
    // console.log(cardId);
    // }
    
  return (
    <Box>
      <h1>All users</h1><Container> {users.length > 0 &&
        users.map(({ user, avatar, tweets, followers, id }) => {
          return (
            <Card
                  key={id}
                  id={id}
              user={user}
              avatar={avatar}
              followers={followers}
                  tweets={tweets}
                //   onClick={handleClick}
                  
            />
          );
        })}</Container>
     
      <button type="button">Load more</button>
    </Box>
  );
};

export default Cards;
