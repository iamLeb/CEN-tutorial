import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="Logo" className="max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex flex-col mb-6 md:mb-0">
            <ul>
              <li>Links List 1::::</li>
              <li className="mb-2">
                <a href="" className="hover:underline">
                  Link 1
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:underline">
                  Link 2
                </a>
              </li>
              <li className="mb-2">
                <a href="" className=" hover:underline">
                  Link 3
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <ul>
              <li>Links List 2::::</li>
              <li className="mb-2">
                <a href="" className=" hover:underline">
                  Link 4
                </a>
              </li>
              <li className="mb-2">
                <a href="" className=" hover:underline">
                  Link 5
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="text-white hover:underline">
                  Link 6
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        &copy; 2024 Cencadian Education Incorporated. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
