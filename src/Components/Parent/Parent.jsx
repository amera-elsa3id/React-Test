
import { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {
    let [products,setProducts] =useState([
        { id: 1, name: 'Product 1' ,onSale:false , price:20},
        { id: 2, name: 'Product 2' ,onSale:true , price:30},
        { id: 3, name: 'Product 3' ,onSale:false , price:80},
        { id: 5, name: 'Product 4' ,onSale:true , price:50},
        { id: 11, name: 'Product 5' ,onSale:true , price:70},
        { id: 20, name: 'Product 6' ,onSale:false , price:90},
    ])
    
    function deleteProduct(id){
        let myProducts= structuredClone(products);
        myProducts=myProducts.filter((product)=>product.id != id)
        setProducts(myProducts);
    }
    function updateProduct(index){
        let myProducts=[...products];
        myProducts[index].price++;
        setProducts(myProducts);
    }
  return (
    <>
    <h1>Parent</h1>
    <div className='flex flex-wrap'>
    {products.map((product,i)=><Child product={product} index={i} key={i} deleteProduct={deleteProduct} updateProduct={updateProduct}/>)}
    </div>
    {/* <Child></Child> */}
    </>
  )
}
