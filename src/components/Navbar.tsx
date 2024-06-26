import Accent from "../util/Accent";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {Accent("Renato ")} Ugaz H.
          </p>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#experience"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-highlight dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-highlight dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-highlight dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            {/* 
            Selected option placeholder
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-highlight"
                aria-current="page"
              >
                About me
              </a>
            </li> */}
            <li>
              <a
                href="#about me"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-highlight dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-highlight dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
