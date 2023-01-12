import Item from "./item";

const Items = (props) => {
    return ( 
        <div class="grid m-5 grid-cols-5 gap-3">
            {props.items.map(item => < Item  item={item}/> )}
        </div>
    );
}
 
export default Items;