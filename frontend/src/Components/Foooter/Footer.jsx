import logo from "../../assets/logo.jpg"

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-8">
            <div className="container text-center mx-auto px-4">
                {/* Grid for footer sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and About Section */}
                    <div>
                        <h2 className="text-2xl font-semibold tracking-wide mb-4 mx-auto justify-center flex"><img className="w-32 rounded-full" src={logo} alt="" /></h2>
                        <p className="text-sm">
                            we offer expert guidance, tailored workout plans, and nutrition advice to help you achieve your goals. Join our community and transform your lifestyle today!"
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className=" transition duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about-us"
                                    className=" transition duration-300"
                                >
                                    About
                                </a>
                            </li>
                           
                            <li>
                                <a
                                    href="/contact"
                                    className=" transition duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 justify-center ">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692V10.71h3.128V8.414c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.505 0-1.795.715-1.795 1.762v2.31h3.59l-.467 3.997h-3.123V24h6.128c.73 0 1.322-.593 1.322-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.555-2.005.96-3.127 1.184-.897-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.207-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.095 4.067 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.708.869 3.214 2.188 4.096-.806-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.923-.086.623 1.942 2.444 3.355 4.604 3.393-1.685 1.32-3.808 2.107-6.102 2.107-.396 0-.788-.023-1.175-.067 2.179 1.393 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.016-.633.962-.693 1.797-1.56 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 "
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.32 3.608 1.296.975.975 1.234 2.242 1.296 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.32 2.633-1.296 3.608-.975.975-2.242 1.234-3.608 1.296-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.32-3.608-1.296-.975-.975-1.234-2.242-1.296-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.32-2.633 1.296-3.608.975-.975 2.242-1.234 3.608-1.296 1.265-.058 1.645-.07 4.849-.07m0-2.163C8.755 0 8.343 0 7.053.07 5.645.139 4.379.417 3.215 1.582 2.05 2.747 1.772 4.013 1.703 5.421.7 6.768.7 8.288.7 12s0 5.232.07 6.58c.069 1.408.347 2.674 1.512 3.839 1.165 1.165 2.432 1.443 3.839 1.512 1.348.07 2.868.07 6.58.07s5.232 0 6.58-.07c1.408-.069 2.674-.347 3.839-1.512 1.165-1.165 1.443-2.432 1.512-3.839.07-1.348.07-2.868.07-6.58s0-5.232-.07-6.58c-.069-1.408-.347-2.674-1.512-3.839-1.165-1.165-2.432-1.443-3.839-1.512C16.645.07 16.233.07 12 .07z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center text-sm  border-t pt-4">
                    &copy; {new Date().getFullYear()} Tokyo Fitness Center. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
