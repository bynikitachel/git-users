import { useState } from 'react';
import NavBar from './components/NavBar';
import MessageComponent from './components/MessageComponent';
import User from './components/User';
import Loader from './components/Loader';
import getUserData from './requestApi/getUserData';
import getUserRepos from './requestApi/getUserRepos';
import './App.scss';

function App() {

  const [user, setUser] = useState('');
  const [userData, setUserInfo] = useState(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const isUserData = userData && !invalidUser;
  const stateText = invalidUser ? 'User not found' : 'Start with searching a GitHub user';
  const stateIcon = invalidUser ? 'user-icon' : 'search-icon';
  const icon = `icon ${stateIcon}`;

  const getUser = async (e) => {
    getUserData(user, getUserRepos, setUserInfo, setLoading, setInvalidUser, e)
  }

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  return (
    <div className="App">
      <NavBar user={user} handleChange={handleChange} getUser={getUser} />
      <div className='container'>
        {loading ?
          <Loader /> :
          isUserData ?
            <User userInfo={userData.userInfo} userRepos={userData.userRepos} /> :
            <MessageComponent containerClass='message-component-user-container' icon={icon} description={stateText} />
        }
      </div>
    </div>
  );
}

export default App;