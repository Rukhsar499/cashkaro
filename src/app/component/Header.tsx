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
                        <div className='col-lg-2 col-md-2 col-12'>
                            <Link className="navbar-brand" href="/">
                                <Image src="/assets/img/logo.svg" alt="Cash Karo" width={120} height={50} />
                            </Link>
                        </div>
                        <div className='col-lg-8 col-md-5 col-12'>
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
                        <div className='col-lg-2 col-md-2 col-12'>
                            <Image src="/assets/img/mobile_toggle.svg" width={30}
                                height={30} alt='hgf' className="offcanvas offcanvas-end"
                                tabIndex={-1}
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel" />

                            <div className="offcanvas offcanvas-end"
                                tabIndex={-1}
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>

    );
}

export default Header;