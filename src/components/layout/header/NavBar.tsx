import Logo from "../web-cents/Logo";
import Header from "./Header";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 rounded hover:bg-blue-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-blue-900"
              >
                Leilões
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-blue-900"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-blue-900"
              >
                Reports
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded hover:bg-blue-900"
              >
                Buy Bids
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <Header icone={<AiOutlineLock />} nome="SignIn" url="log/signin" />
          <Header icone={<AiOutlineUser />} nome="LogIn" url="log/login" />
        </div>
      </div>
    </nav>
  );
}