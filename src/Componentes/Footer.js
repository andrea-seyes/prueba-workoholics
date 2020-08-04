import React from 'react';
import Logotipo from '../Logotipo.svg';

function Footer() {

    return (
        <>
            <footer class="d-none d-lg-block container-fluid position-absolute desktop-footer">
                <div class="row bg-dark justify-content-center pb-lg-4">
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

export default Footer;