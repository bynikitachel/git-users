import './index.scss';

const MessageComponent = ({ containerClass, description, icon }) => {
    return (
        <div className={`container-state ${containerClass}`}>
            <div className={icon} />
            <div className='description-search'>{description}</div>
        </div>
    )
}

export default MessageComponent;