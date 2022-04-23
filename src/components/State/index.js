import './index.scss';

const State = ({ description, icon }) => {
    return (
        <div className='container-initial-state'>
            <div className={icon} />
            <div className='description-search'>{description}</div>
        </div>
    )
}

export default State;