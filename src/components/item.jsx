const Item = (props) => {
  return (
    <div className="w-56 bg-slate-300 shadow-xl sm:w-48px-2 hover:-translate-y-1 border rounded-lg flex flex-col items-center">
      <figure>
        <img src={props.item.url} alt="Phones" />
      </figure>
      <div className="w-full px-5 bg-teal-400 rounded-md text-center py-2">
        <h6 className="mb-2">{props.item.name}</h6>
        <p className="text-sm mb-1">Rs. {props.item.price}</p>
        <div className="flex flex-row gap-5 bg-white items-center rounded-md justify-center mb-2">
          <button 
            className="w-6 h-6 hover:bg-gray-300 ease-in-out border rounded-md"
            onClick={() => props.onDecrement(props.item.id)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              ></path>
            </svg>
          </button>
          <p className="text-xl"> {props.item.value}</p>
          <button 
            className="w-6 h-6 hover:bg-gray-300 ease-in-out border rounded-md"
            onClick={() => props.onIncrement(props.item.id)}
            >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          </button>
        </div>
        <button 
            className="mb-2 px-3 py-2 bg-teal-400 border rounded-md hover:bg-teal-700 hover:text-white shadow-md"
            onClick={() => props.toCart(props.item.id)}
        >
            Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
