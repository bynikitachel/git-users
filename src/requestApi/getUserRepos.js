const getUserRepos = (user, userInfo, setUserInfo, setLoading, setInvalidUser) => {
    fetch(`https://api.github.com/users/${user}/repos`)
        .then(response => {
            if (response.status === 200) {
                response.json().then((res) => {
                    const info = { userInfo, userRepos: res }
                    setUserInfo(info);
                    setLoading(false);
                    setInvalidUser(false);
                })
            }
        })
}

export default getUserRepos;