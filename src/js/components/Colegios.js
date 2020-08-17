import React from 'react';
import Canigua from '../../img/instituciones/logo-canigua.png';
import LosArcos from '../../img/instituciones/logo-los-arcos.jpg';
import SimonBolivar from '../../img/instituciones/logo-simon-bolivar.png';
import Roraima from '../../img/instituciones/logo-roraima.jpg';

export const Colegios = () => {
    return(
        <div className="container my-5">
            <h2 className="col-6">INSTITUCIONES EDUCATIVAS</h2>
            <div className="row w-auto my-3">
                <div className="col-md-1"></div>
                <div className="col-12">
                    <a href="http://www.canigua.com/"><img src={Canigua} alt="Colegio Canigua" className="col-md-2 col-4"/></a>
                    <a href="https://www.instagram.com/colegiolosarcos/?hl=es-la"><img src={LosArcos} alt="Colegio Los Arcos" className="col-md-2 col-3"/></a>
                    <a href="https://colegiosimonbolivar.edu.ve/"><img src={SimonBolivar} alt="Colegio Simón Bolívar" className="col-md-2 col-4"/></a>
                    <a href="https://www.colegiororaima.com/"><img src={Roraima} alt="Colegio Roraima" className="col-md-3 col-4"/></a>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
    
}