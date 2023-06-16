import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { Container } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          status={isOnline}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
