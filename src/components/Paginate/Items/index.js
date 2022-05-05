import './index.scss';

const Items = ({ currentItems }) => {
    const getItems = () => {
        return currentItems &&
            currentItems.map((item, i) => {
                const descriptionRep = item.description;
                return (
                    <div key={i} className='container-rep'>
                        <div className='rep-name'><a href={item.clone_url} target="_blank" rel="noreferrer">{item.name}</a></div>
                        {descriptionRep && <div className='rep-description'>{descriptionRep}</div>}
                    </div>
                )
            })
    }

    const itemsList = getItems();

    return (
        <>
            {itemsList}
        </>
    );
}

export default Items;