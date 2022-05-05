import MessageComponent from '../MessageComponent';
import PaginatedItems from '../Paginate/PaginatedItems';
import './index.scss';

const User = ({ userInfo, userRepos }) => {
    const notFoundText = "Repository not found";
    const COUNT_REPOS_PER_PAGE = 4;

    return userRepos && (
        <div className='user-container'>
            <div className='user-info'>
                <img className='avatar' src={userInfo.avatar_url} alt='avatar' />
                <div className='name'>{userInfo.name}</div>
                <div className='nickname'><a href={userInfo.html_url} target="_blank" rel="noreferrer">{userInfo.login}</a></div>
                <div className='followers-container'>
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
                {userRepos.length && !!userRepos.length ?  /*можно вынести в переменную условие*/
                    <div className='repositories'>
                        <div className='header'>Repositories ({userRepos && userRepos.length})</div>
                        <PaginatedItems itemsPerPage={COUNT_REPOS_PER_PAGE} userRepos={userRepos} />
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