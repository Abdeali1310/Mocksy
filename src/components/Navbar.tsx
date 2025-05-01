import Image from "next/image";
import { Toggle } from "./Toggle";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-2 mb-4 border-red-200 items-center h-16 px-6 border-b shadow-sm">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="text-lg font-semibold">Mocksy</span>
      </div>
      <div className="toggle flex gap-3">
      <Toggle />
      <ActionButton />
      </div>
    </nav>
  );
};

export default Navbar;
