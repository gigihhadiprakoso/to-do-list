import * as React from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-8 py-3 bg-sky-500 mb-3">
            <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start" data-cy="header-title">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        href="#pablo"
                    >
                        TO DO LIST APP
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
                    id="example-navbar-danger"
                >    
                </div>
            </div>
        </nav>

  );
}