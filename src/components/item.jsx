const Item = (props) => {
    return ( 
      <div className="w-56 bg-slate-300 shadow-xl sm:w-48px-2 hover:-translate-y-1 border rounded-lg flex flex-col items-center">
        <figure >
            <img src={props.item.url} alt="Phones" />
        </figure>
        <div className="w-full px-5 bg-teal-400 rounded-md">
          <h6>
            {props.item.name}
          </h6>
          <p className="text-sm">
            Rs. {props.item.price}
          </p>
          <div>
            action
          </div>
        </div>
      </div>
    );
}


export default Item;