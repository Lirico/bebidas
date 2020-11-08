import React from 'react';

const Formulario = () => {
    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente" 
                    />
                </div>
                <div className="col md-4">
                    <select
                        name="categoria"
                        className="form-control"
                    >
                        <option value="">-- Selecciona Categoría --</option>
                    </select>
                </div>
                <div class="col md-4">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >Buscar Bebidas</button>
                </div> 
            </div>
        </form>
     );
}
 
export default Formulario;