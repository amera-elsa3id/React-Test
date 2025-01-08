export default function Child(props) {
  let { id, name, price, onSale } = props.product;
  return (
    <>
    <div className="w-1/4 p-2 ">
        <div className="relative bg-gray-300 rounded-md shadow-md">
            <p className="text-left p-1 w-fit bg-green-100">{id}</p>
            <h2 className="text-2xl font-medium text-slate-800 text-capitalize">{name}</h2>
            <p className="mb-2">Price: {price}</p>
            {onSale && <div className="sale">sale</div>}
            <button onClick={()=>props.deleteProduct(id)} className="btn border text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-all">Delete <i className="fa fa-trash"></i></button>
            <button onClick={()=>props.updateProduct(props.index)} className="btn border text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all">Update <i className="fa fa-pen"></i></button>
        </div>
    </div>
    </>
);
}
