import './index.scss';

const RepositoryItem = ({ userRep }) => {
    return (
        <div className='container-rep'>
            <div className='rep-name'><a href={userRep.clone_url} target="_blank">{userRep.name}</a></div>
            {userRep.description && <div className='rep-description'>{userRep.description}</div>}
        </div>
    )
}

export default RepositoryItem;