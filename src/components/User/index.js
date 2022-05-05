import MessageComponent from '../MessageComponent';
import PaginatedItems from '../Paginate/PaginatedItems';
import './index.scss';

const User = ({ userInfo, userRepos }) => {
    const isUserInfo = userRepos.length && !!userRepos.length;
    const notFoundText = "Repository not found";

    return userRepos && (
        <div className='user-container'>
            <div className='user-info'>
                <img className='avatar' src={userInfo.avatar_url} alt='avatar' />
                <div className='name'>{userInfo.name}</div>
                <div className='nickname'><a href={userInfo.html_url} target="_blank" rel="noreferrer">{userInfo.login}</a></div>
                <div className='follow-container'>
                    <div className='followers-container'>
                        <div className='icon-followers' />
                        <div className='followers'>{userInfo.followers} followers</div>
                    </div>
                    <div className='following-container'>
                        <div className='icon-following' />
                        <div className='following'>{userInfo.followers} following</div>
                    </div>
                </div>
            </div>
            <div className='repositories-container'>
                {isUserInfo ?
                    <div className='repositories'>
                        <div className='header'>Repositories ({userRepos && userRepos.length})</div>
                        <PaginatedItems itemsPerPage={4} userRepos={userRepos} />
                    </div> :
                    <MessageComponent
                        containerClass='message-component-rep-container'
                        icon='rep-icon'
                        description={notFoundText}
                    />
                }
            </div>
        </div>
    )
}

export default User;