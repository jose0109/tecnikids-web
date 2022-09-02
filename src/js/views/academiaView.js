import React from 'react';
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';

export const AcademiaView = () => {
    return (
        <div>
            <SeparationLines />
            <div className="container">
                <img src="https://i.ibb.co/1fNGWNd/header.png" alt="Tecnikids" className="w-100" />
                <img src="https://i.ibb.co/hHJq1ZM/hero-image.png" alt="Información" className="w-100" />
                <div className="col-12 my-5 f-weigth-600">
                    <h6 className="text-gray font-face-cocogoose">Costo:</h6>
                    <h6 className="text-gray"><span className="f-weigth-600 font-face-cocogoose">Precios de Lanzamiento</span></h6>
                </div>
                <div className="row my-5 text-blue">
                    <div className="col-12 text-center">
                        <img src="https://i.ibb.co/2hSS0jB/precios.png" alt="Precios" className="w-100" />
                    </div>
                </div>
                <div className="row bottom-border my-3 py-3">
                    <div className="col-10 mx-auto">
                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/ejq0U68yl9w?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h2 className="text-blue text-center font-face-cocogoose">¿Qué esperas para que tu hijo forme parte de nuestra Academia de robótica?</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://i.ibb.co/dggSRc3/8.jpg" alt="Métodos de Pago" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 f-weigth-600">
                        <h6 className="text-blue text-center font-face-cocogoose">PROCESO DE INSCRIPCIÓN</h6>
                        <br />
                        <p className="text-center text-gray">Pasos a seguir:</p>
                        <p className="text-justify text-gray">
                            1. Realice el pago correspondiente a Tecnikids Venezuela (Depósito Bancario o transferencia). Los datos se enviarán luego de ser llenado el formulario.
                            <br />
                            2. Llene el formulario de <a className="planilla-link" href="https://forms.gle/imoeAbhFJsFqUUks6" target="_blank" rel="noreferrer">"Planilla de Inscripción Academia - Tecnikids VE 2022- 2023"</a>. Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.
                            <br />
                            3. Debe enviar el comprobante de pago al correo <a className="planilla-link" href="mailto:academia.tecnikidsve@gmail.com">academia.tecnikidsve@gmail.com</a> para culminar con el proceso de inscripción y asegurar el cupo del estudiante. En el asunto debe colocar "Comprobante de pago" y el nombre del estudiante (OBLIGATORIO).
                        </p><br /><br />
                        <p style={{color: "rgb(16, 65, 138)"}}> Inscripciones abiertas a partir del 2 de septiembre de 2022.</p>
                        <br />
                        <p className="text-justify text-gray">
                            LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.
                        </p>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-12 text-right">
                            <p>Para más información puedes contactarnos:</p>
                            <p><span className="text-blue">Tecnikids Venezuela <a className="planilla-link" href="tel:+584122070246">+58 412 207 0246</a></span></p>
                            <p><a className="planilla-link" href="mailto:academia.tecnikidsve@gmail.com" rel="noreferrer">academia.tecnikidsve@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <SeparationLines />
        </div>
    );
}
