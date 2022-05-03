import State from '../State';
import PaginatedItems from '../Paginate/PaginatedItems';
import './index.scss';

const User = ({ userInfo, userRepos }) => {
    console.log(userRepos);
    return userRepos && (
        <div className='container-user'>
            <div className='user-info'>
                <img className='user-avatar' src={userInfo.avatar_url} alt='avatar'></img>
                <div className='user-name'>{userInfo.name}</div>
                <div className='user-nickname'><a href={userInfo.html_url} target="_blank" rel="noreferrer">{userInfo.login}</a></div>
                <div className='container-user-followers'>
                    <div className='container-user-followers'>
                        <div className='user-followers-icon' />
                        <div className='user-followers'>{userInfo.followers} followers</div>
                    </div>
                    <div className='container-user-followers'>
                        <div className='user-following-icon' />
                        <div className='user-following'>{userInfo.followers} following</div>
                    </div>
                </div>
            </div>
            <div className='container-user-repositories'>
                {userRepos.length && !!userRepos.length ?
                    <div className='user-repositories'>
                        <div className='repositories-header'>Repositories ({userRepos && userRepos.length})</div>
                        <PaginatedItems itemsPerPage={4} userRepos={userRepos} />
                    </div> :
                    <State containerClass='container-state-rep' icon='rep-icon' description='Repository not found' />
                }
            </div>
        </div>
    )
}

export default User;