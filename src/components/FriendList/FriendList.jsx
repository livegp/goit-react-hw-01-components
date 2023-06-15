import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem/FriendListItem'

function FriendList(props) {
  return (
    <ul class="friend-list">
      <FriendListItem/>
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
}


export default FriendList
