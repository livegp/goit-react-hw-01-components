import React from 'react'
import PropTypes from 'prop-types'
import friends from 'data/friends';

const FriendListItem = props => {
  return (
    <li class="item" friends={friends}>
      <span class="status"></span>
      <img class="avatar" src="" alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem
