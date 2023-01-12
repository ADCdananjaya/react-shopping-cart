import Item from "./item";

const Items = (props) => {
    return ( 
        <div className="grid m-5 grid-cols-5 gap-3">
            {props.items.map(item =>  <Item item={item} onIncrement={props.onIncrement} onDecrement={props.onDecrement} toCart={props.toCart}/> )}
        </div>
    );
}
 
export default Items;