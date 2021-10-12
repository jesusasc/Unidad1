import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
//import './src/App.css';
import AddProduct from './Componentes/AddProduct';
import EditProduct from './Componentes/EditProduct';
import ProductTable from "./Componentes/ProductTable";

function App() {

  const productData =[
    {id: uuidv4(), name: 'Yogurth', precio:"100", descripcion:"wedrftgyhujikovgbhnvbh",
    stock:"254"},
    {id: uuidv4(), name: 'Queso', precio:"100", descripcion:"wedrftgyhujikovgbhnvbh",
    stock:"254"}
  ]


  const [products, setProducts] = useState(productData)
 //Agregar Producto 
  const AddProducts = (product) =>{
    product.id = uuidv4()
    setProducts([
      ...products,
      product
    ])
  }
  //Eliminar Producto
  const deleteProduct = (id) =>{
    console.log(id)
    setProducts(products.filter(products => products.id !== id))
  }

//Bandera para Actualizar usuarios cambia entre add y edit
const [bandera, setBandera] = useState(false);
  
//Objeto datos para editar
const [currentProduct, setcurrentProduct] = useState({
  id: null, name: '', precio: '', descripcion: '', stock: ''
});

  //Editar Producto obtener los datos para mostarar en el formularios de PRODUCTO
  const editRow = (products) => {
    setBandera(true)
    setcurrentProduct({
      id: products.id, name: products.name, precio: products.precio, descripcion: products.descripcion, stock: products.stock
    })
  }
     //Funcion para Editar
    const upDateProduct = (id, upDateProduct) => {
    setBandera(false);
    setProducts(products.map(product => (product.id === id ? upDateProduct : product)))
  }

  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <h1>Unodad1</h1>
        <div class="col-md-auto border border-primary">
          <h1>Producto</h1>
          {
            bandera ? (
              <div>
                <h1>Edit Product</h1>
                <EditProduct currentProduct={currentProduct} upDateProduct={upDateProduct}/>
              </div>
            ) : (
              <div>
                <h1>Add Product</h1>
                <AddProduct AddProducts ={AddProducts}/>
              </div>
            )
          }
          
        </div>
      </div>
      <div class="col">
          <h1>Tabla Producto</h1>
          <ProductTable products={products} deleteProduct={deleteProduct} editRow={editRow}/>
        </div>

    </div>
  );
}

export default App;
