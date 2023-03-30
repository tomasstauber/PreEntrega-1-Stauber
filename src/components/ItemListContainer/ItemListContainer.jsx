import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className='saludo'> {props.greeting} </h2>
        </div>
    )
}
export default ItemListContainer