const getUserData = (user, getUserRepos, setUserInfo, setLoading, setInvalidUser, e) => {
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
                        getUserRepos(user, userInfo, setUserInfo, setLoading, setInvalidUser);
                    })
                }
            })
    }
}

export default getUserData;