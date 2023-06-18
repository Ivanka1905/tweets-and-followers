import Card from 'components/Card/Card';
import {
  getAll,
  addSubscription,
  getSubscriptions,
  deleteSubscription,
  updFollowers,
} from 'components/services/usersApi';
import React, { useEffect, useState } from 'react';
import { Container, Box, Button } from './Cards.styled';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// const options = ['show all', 'follow', 'followings'];
// const defaultOption = options[0];

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [myChoice, setMyChoice] = useState([]);
  const [userId, setUserId] = useState(null);
  const [page, setPage] = useState(1);
//   const [selectedOption, setSelectedOption] = useState('all');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const newUsers = await getAll(page);
        if (page === 1) {
          setUsers(newUsers);
        } else {
          setUsers(prevUsers => [...prevUsers, ...newUsers]);
        }

        const favorite = await getSubscriptions();
        setMyChoice(favorite);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [page]);
    
// const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
//     };
    
//     const filteredUsers = users.filter((user) => {
//     if (selectedOption === 'all') {
//       return true;
//     } else if (selectedOption === 'follow') {
//       return !user.following;
//     } else if (selectedOption === 'following') {
//       return user.following;
//     }
//     return false;
//   });

  const handleClick = async e => {
    const clickedUserId = e.currentTarget.dataset.id;
    const name = e.currentTarget.value;
    const isSubscr = true;

    try {
      const isFollowing = myChoice.find(u => u.userCardId === clickedUserId);
      if (isFollowing) {
        await deleteSubscription(isFollowing.id);
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user.id === clickedUserId
              ? { ...user, followers: user.followers - 1 }
              : user
          )
        );
      } else {
        await addSubscription({ userCardId: clickedUserId, name, isSubscr });

        setUsers(prevUsers =>
          prevUsers.map(user =>
            user.id === clickedUserId
              ? { ...user, followers: user.followers + 1 }
              : user
          )
        );
      }

      const updatedFavorite = await getSubscriptions();
      setMyChoice(updatedFavorite);
      setUserId(clickedUserId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updateFollowers = async () => {
      const updatedUser = users.find(user => user.id === userId);
      if (updatedUser) {
        await updFollowers(userId, { followers: updatedUser.followers });
      }
    };

    if (userId) {
      updateFollowers();
    }
  }, [users, userId]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
      <Box>
          {/* <Drop>
<Dropdown value={selectedOption} onChange={handleDropdownChange}><option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option></Dropdown>
      </Drop> */}
      <Container>
        {users.length > 0 &&
          users.map(({ user, avatar, tweets, followers, id }) => {
            return (
              <Card
                key={user}
                id={id}
                user={user}
                avatar={avatar}
                followers={followers}
                tweets={tweets}
                onClick={handleClick}
                myChoice={myChoice}
              />
            );
          })}
      </Container>

      <Button type="button" onClick={loadMore}>
        Load more
      </Button>
    </Box>
  );
};

export default Cards;
