import React from 'react';
import PropTypes from 'prop-types';
import { FriendListContainer, FriendListItem, StatusIndicator, Avatar, Name } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id}>
          <StatusIndicator isOnline={isOnline} />
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
