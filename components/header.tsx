
import profilePic from "../public/me-ios.jpg";
import Image from "next/image";

export default function Header() {

    return (
      <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex justify-between px-6 mx-auto">
          <div className="flex justify-center items-center">
            <Image src={profilePic} width={40} height={40} alt="profile" />
            <span className="text-md font-black text-gray-800 uppercase">
              Gonzalo Barba
            </span>
          </div>
          <a href="mailto:me@gonzalobarba.com" className="flex px-6 py-2 hover:text-black">
            Contact
          </a>
        </div>
      </header>
    );
}
