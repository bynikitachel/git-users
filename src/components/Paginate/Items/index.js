const Items = ({ currentItems }) => {
    // console.log(currentItems);
    return (
        <>
            {currentItems &&
                currentItems.map((item, i) => (
                    <div key={i} className='container-rep'>
                        <div className='rep-name'><a href={item.clone_url} target="_blank">{item.name}</a></div>
                        {item.description && <div className='rep-description'>{item.description}</div>}
                    </div>
                ))}
        </>
    );
}

export default Items;