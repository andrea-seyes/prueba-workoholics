import React from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";


function Signin() {

    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-4">

                        <div class="d-none d-lg-block pb-4">
                            <NavLink
                                class="row justify-content-start align-items-center m-0 pt-4 pb-5 text-dark"
                                to="/">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <h6 class="m-0">Go back</h6>
                            </NavLink>
                            <h4>Sign in</h4>
                        </div>

                        <div class="row justify-content-between align-items-baseline mt-3 mb-5 text-primary m-0 d-lg-none">
                            <h5>Sign in</h5>
                            <svg width="1.2rem" height="1.2rem" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <form>
                            <div class="form-group">
                                <label class="m-0"><h6 class="m-0">Username</h6></label>
                                <input type="text" class="form-control rounded-0 border border-dark mb-4" id="formGroupExampleInput" />
                            </div>
                            <div class="form-group">
                                <label class="m-0"><h6 class="m-0">Password</h6></label>
                                <input type="text" class="form-control rounded-0 border border-dark mb-5" />
                            </div>
                            <button type="submit" class="btn btn-primary w-100 m-0 p-3"><h5 class="m-0">Sign in</h5></button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;