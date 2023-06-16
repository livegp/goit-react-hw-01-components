import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <Item>
      <Status status={status}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
