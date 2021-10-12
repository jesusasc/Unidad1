import React,{Fragment} from 'react'

const ProductTable = (props) => {
    console.log(props.products)

    return ( 
        <Fragment>
            <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nombre del producto</th>
                    <th>Precio</th>
                    <th>Descripcion </th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.length > 0 ?
                    props.products.map(product =>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.precio}</td>
                            <td>{product.descripcion}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" onClick = {() => {props.editRow(product)}}>Edit</button> 
                                <button class="btn btn-danger btn-sm" 
                                onClick = {() => {props.deleteProduct(product.id)}}>Delete</button>
                            </td>
                        </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan={3}>Aun No hay Registros</td>

                        </tr>
                    )
                }
            </tbody>
        </table>

        </Fragment>
     );
}
 
export default ProductTable;