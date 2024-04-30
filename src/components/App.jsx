import React from 'react';
import Profile from './Profile'; 
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionsHistory';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { AppContainer, ComponentContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <ComponentContainer>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </ComponentContainer>
      <ComponentContainer>
        <Statistics title="Upload stats" stats={data} />
      </ComponentContainer>
      <ComponentContainer>
        <FriendList friends={friends} />
      </ComponentContainer>
      <ComponentContainer>
        <TransactionHistory items={transactions} />
      </ComponentContainer>
    </AppContainer>
  );
};