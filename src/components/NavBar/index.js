import './index.scss';

const NavBar = ({ user, handleChange, getUser }) => {
    return (
        <div className='navbar'>
            <div className='git-icon'/>
            <input
                className='input'
                placeholder='Enter GitHub username'
                autoFocus
                value={user}
                onChange={handleChange}
                onKeyPress={getUser}
            />
        </div>
    )
}

export default NavBar;