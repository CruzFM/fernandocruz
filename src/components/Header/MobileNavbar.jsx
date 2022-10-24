import { Link } from 'react-router-dom'

export default function MobileNavbar( { closeNav }){

    return(
        <div
            className='w-full absolute top-9 right-0'
            id="navbar-default"
        >
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <Link
              to="/"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={ closeNav }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={ closeNav }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={ closeNav }
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/certifications"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={ closeNav }
            >
              Certifications
            </Link>
          </li>
        </ul>
      </div>

    )
}