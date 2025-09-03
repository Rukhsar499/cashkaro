"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

function Header() {
    const [query, setQuery] = useState<string>("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Search Query:", query);
        // yaha tum API call ya redirect logic likh sakte ho
    };

    return (
        <header>
            <section className="sticky-navbar">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-1 col-md-1 col-12'>
                            <button
                                className="btn"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#staticBackdrop"
                                aria-controls="staticBackdrop"
                            >
                                <Image
                                    src="/assets/img/mobile_toggle.svg"
                                    width={30}
                                    height={30}
                                    alt="toggle"
                                />
                            </button>
                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static"
                                tabIndex={-1}
                                id="staticBackdrop"
                                aria-labelledby="staticBackdropLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas right</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    ...
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-12'>
                            <Link className="navbar-brand" href="/">
                                <Image src="/assets/img/logo.svg" alt="Cash Karo" width={120} height={50} />
                            </Link>
                        </div>
                        <div className='col-lg-6 col-md-5 col-12'>
                            <form className="d-flex mt-2" onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    placeholder="Search for deals, stores or products..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />

                            </form>
                        </div>
                        <div className='col-lg-1 col-md-1 col-12'>
                            <div className='logimg mt-3'>
                                <Image
                                    src="/assets/img/account_circle.svg"
                                    width={30}
                                    height={30}
                                    alt="toggle"
                                /> 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </header>

    );
}

export default Header;