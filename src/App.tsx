import React, { useState } from 'react';
import { fetchUser } from './service';
import User from './components/User';

/**
 * Goal: Design an application to search github users via their username.
 *
 * You have access to tailwindcss for styling, docs here: https://tailwindcss.com/docs/installation
 * I can provide you with the access token for github.
 *
 * Requirements:
 * 1. Create a form to search for a user on GitHub.
 * Create an input field to take the username as input.
 * Create a button to submit the username.
 * Create a results are to display the search results for the matches user(s).
 * You need to display the following info for the user(s):
 * - Avatar
 * - Username
 * - Name
 * - Location
 * - Link to the user's blog
 * - Bio
 * - Last updated at
 * Here are the documentation links for the GitHub API (I can provide you the api key to use):
 * https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
 *
 * 2. Create a "Favorited users" section to display the favorited users.
 * Create a way to add/remove a user to the favorited users section.
 * The favorited users can just be stored in memory and don't need to persist across sessions.
 * The favorited users should be displayed in a list, alphabetically sorted by username.
 */

type TypeUser = {
  avatar_url: string;
  username: string;
  name: string;
  location: string;
  link: string;
  bio: string;
  lastUpdatedAt: string;
};

const App = () => {
  const [username, setUsername] = useState('');
  const [favoriteUsers, setFavoriteUsers] = useState<Array<string>>([]);
  const [user, setUser] = useState<TypeUser>();

  const handleSearch = async () => {
    const user = await fetchUser(username);
    if (user && user.data) {
      setUser(user.data);
    }
  };

  const handleFavorite = (favorite: boolean) => {
    console.log('favorite', favorite);
    if (favorite) {
      setFavoriteUsers([...favoriteUsers, username]);
    } else {
      setFavoriteUsers(favoriteUsers.filter((user) => user !== username));
    }
  };

  return (
    <div className='container mx-auto px-6'>
      <div className='h-20 flex items-center justify-center bg-gray-200'>
        <h1 className='text-2xl'>GitHub Search</h1>
      </div>

      <div className='mt-6'>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='mt-6'>
        {user && (
          <User
            avatar={user.avatar_url}
            favorite={
              favoriteUsers.filter((user) => user === username).length > 0
            }
            onFavorite={handleFavorite}
            // username={}
            // name=
            // location={}
            // link={}
            // bio={}
            // lastUpdatedAt={}
          />
        )}
      </div>
    </div>
  );
};

export default App;
