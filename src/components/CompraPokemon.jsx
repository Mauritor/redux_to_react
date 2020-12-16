import React, { Component, Fragment } from 'react'

class CompraPokemon extends Component {
    render() {
        return (
            <Fragment>
                <div className="row text-center">
                    <div className="col-12">
                        <button className="btn btn-dark btn-sm mb-2">Comprar Pokemon</button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-dark btn-sm">Regresar Pokemon</button>
                    </div>
                </div>


            </Fragment>
        )
    }
}

export default CompraPokemon