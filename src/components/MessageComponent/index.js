import './index.scss';

const MessageComponent = ({ containerClass, description, icon }) => {
    const className = `message-component-container ${containerClass}`;
    return (
        <div className={className}>
            <div className={icon} />
            <div className='description-search'>{description}</div>
        </div>
    )
}

export default MessageComponent;