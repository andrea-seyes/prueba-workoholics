import React from 'react';
import Logotipo from '../Logotipo.svg';
import "../index.css";


function Home() {

    return (
        <>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 p-0">

                        <div class="row justify-content-center align-items-end m-0">
                            <div class="row justify-content-center align-items-center m-0 w-100">
                                <div class="row justify-content-center m-0  position-relative w-100">
                                    <picture class="w-100">
                                        <source srcset="./Imagenes/Imagen_Mobile.png"
                                            media="(max-width: 650px)" />
                                        <source srcset="./Imagenes/Imagen_Desktop.png"
                                            media="(min-width: 1024px)" />
                                        <img src="./Imagenes/Imagen_Desktop.png" alt="banner"
                                            class="w-100"
                                            srcset="./Imagenes/Imagen_Desktop.png" />
                                    </picture>
                                </div>


                                <div class="position-absolute m-0 w-100 text-white">
                                    <div class="row justify-content-start m-0  ml-lg-5">
                                        <div class="col-9 col-lg-3 pl-4 pl-lg-0">
                                            <h2>Lorem ipsum</h2>
                                            <h4 class="f">Dolor sit amet consec tetur adipiscing elit.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="position-absolute m-0 w-100 text-white">
                                <div class="row m-0 justify-content-center">
                                    <div class="row justify-content-center m-0 align-items-center">
                                        <h6 class="mb-1">Our Products</h6>
                                        <svg width="2rem" height="2rem" viewBox="0 0 16 16" class="bi bi-arrow-down-short mb-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                                            <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid p-lg-0">

                            <h3 class="pt-5 pb-4">Featured Products</h3>

                            <div class="row m-0">

                                <div class="col-12 col-lg-4 mr-lg-3 pl-lg-4 border-xs border-lg">
                                    <div class="row p-0 pb-4 pb-lg-0">
                                        <div class="col-5 col-lg-5 p-2" >
                                            <img class="w-100" src="../imagenes/iphone-silver.png" alt="product 1" />
                                        </div>

                                        <div class="col-7 col-lg-7 p-2 p-xs">
                                            <h5>Product 1</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae ut vero.</p>
                                            <div class="row align-content-center m-0">
                                                <h6>Color: </h6>

                                                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-circle-fill ml-3" fill="#e1e1d7" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="7.6" stroke="#333333" />
                                                </svg>
                                                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-circle-fill ml-3" fill="#f5e5da" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="7.6" stroke="none" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4 border-lg  pl-lg-4">
                                    <div class="row p-0 pt-4 pt-lg-0 pb-5 pb-lg-0">
                                        <div class="col-5 col-lg-5 p-2" >
                                            <img class="w-100" src="../imagenes/iphone8-gold.png" alt="product 2" />
                                        </div>

                                        <div class="col-7 col-lg-7 p-2 p-xs">
                                            <h5>Product 1</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae ut vero.</p>
                                            <div class="row align-content-center m-0">
                                                <h6>Color: </h6>

                                                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-circle-fill ml-3" fill="#e1e1d7" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="7.6" stroke="none" />
                                                </svg>
                                                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-circle-fill ml-3" fill="#f5e5da" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="7.6" stroke="#333333" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <footer class="d-lg-none container-fluid position-absolute">
                <div class="row bg-dark justify-content-center pb-4">
                    <div class="col-12 col-lg-10 pt-2 pb-5 pt-lg-4 pb-lg-5 pr-lg-0 pl-lg-0">
                        <div class="row justify-content-start m-0">
                            <img src={Logotipo} alt="logotipo" />
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Home;