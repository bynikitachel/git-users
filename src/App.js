import { useState } from 'react';
import NavBar from './components/NavBar';
import MessageComponent from './components/MessageComponent';
import User from './components/User';
import Loader from './components/Loader';
import './App.scss';

function App() {

  const [user, setUser] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [invalidUser, setInvalidUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const stateText = invalidUser ? 'User not found' : 'Start with searching a GitHub user';
  const stateIcon = invalidUser ? 'user-icon' : 'search-icon';

  const getUser = async (e) => {
    let userInfo = null;
    if (e.key === 'Enter') {
      setLoading(true);
      fetch(`https://api.github.com/users/${user}`)
        .then(response => {
          if (response.status !== 200) {
            setInvalidUser(true);
            setLoading(false);
          } else {
            response.json().then((res) => {
              userInfo = res;
              fetch(`https://api.github.com/users/${user}/repos`)
                .then(response => {
                  if (response.ok) {
                    response.json().then((res) => {
                      const info = { userInfo, userRepos: res }
                      setUserInfo(info);
                      setLoading(false);
                      setInvalidUser(false);
                    })
                  }
                })
                .catch(() => { })
            })
          }
        })
    }
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
          (userInfo && !invalidUser) ?
            <User userInfo={userInfo.userInfo} userRepos={userInfo.userRepos} /> :
            <MessageComponent containerClass='container-state-user' icon={`icon ${stateIcon}`} description={stateText} />
        }
      </div>
    </div>
  );
}

export default App;