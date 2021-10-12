import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form'

const AddProduct = (props) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = data =>{
        console.log(data);
        props.AddProducts(data);
    }

    return (  
        <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="exampleInputEmail1" class="form-label" >Producto</label>
                <input type="text" className="form-control" name="name"  aria-describedby="emailHelp"
                {...register("name", { required: true, maxLength: 100})}></input>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

            </div>

            <div>
                <label for="exampleInputEmail1" class="form-label">Precio</label>
                <input type="number" className="form-control" name="precio" aria-describedby="emailHelp"
                {...register("precio", { required: true, maxLength: 100})}></input>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
            </div>
            
            <div >
                <label for="exampleInputEmail1" class="form-label">Descripcion</label>
                <input type="text" className="form-control" name="descripcion" aria-describedby="emailHelp"
                {...register("descripcion", { required: true, maxLength: 100})}></input>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Stock</label>
                <input type="text" className="form-control" name="stock" aria-describedby="emailHelp"
                {...register("stock", { required: true, maxLength: 100})}></input>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary form-control">Primary</button>
            </div>
        </form>
    </Fragment>
    );
}
 

export default AddProduct;
