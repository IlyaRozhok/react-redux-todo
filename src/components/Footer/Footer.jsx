import brainLogo from '../../assets/img/brain.png'
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="todo-list/src/components/Footer/Footer.tsx" className="flex items-center mb-4 sm:mb-0">
                    <img src={brainLogo} className="mr-3 h-8" alt="Flowbite Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Be productive!</span>
                </a>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a
                    href="todo-list/src/components/Footer/Footer.tsx" className="hover:underline">Todo list™</a>. All Rights Reserved.
    </span>
                <ul className="social-group flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://www.instagram.com/el.rozhok/"
                           className="mr-4 hover:underline md:mr-6 "
                           target="_blank"
                        >
                            <div className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="inst"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ilya.rojok/"
                           className="mr-4 hover:underline md:mr-6"
                           target="_blank"
                        >
                            <div className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" alt="facebook"/>
                            </div>
                        </a>

                    </li>
                    <li>
                        <a href="https://github.com/IlyaRozhok"
                           className="mr-4 hover:underline md:mr-6 "
                           target="_blank"
                        >
                            <div className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" alt="github"/>
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ilya-rozhok/"
                           className="hover:underline"
                           target="_blank"
                        >
                            <div className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="linkedin"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
