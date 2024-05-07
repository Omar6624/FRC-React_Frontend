import { navLinks } from "../constant";
import { Fragment } from "react";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Nav = () => {
  return (
    <header>
      <nav className="flex flex-1 justify-end m-2 p-2 ">
        <ul className="flex gap-10 flex-nowrap justify-center items-center max-lg:hidden font-montserrat text-gray-600">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="text-lg  font-montserrat hover:bg-gray-300 py-2 px-4
              border-none rounded-lg leading-normal "
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className=" hidden max-lg:block  text-right focus-visible:ring-2">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-600 py-2 px-4 text-lg font-semibold text-white shadow-inner shadow-white/10 focus:outline-none font-montserrat ">
              options
              <ChevronDownIcon className="size-4 fill-white/60" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl  border-white/5 bg-gray-600 p-1 text-sm text-white focus:outline-none font-montserrat my-1"
              >
                {navLinks.map((item, index) => (
                  <Fragment key={index}>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 data-[focus]:text-slate-600 ">
                        {item.label}
                      </button>
                    </MenuItem>
                    {index !== navLinks.length - 1 && (
                      <div className="mx-auto my-1 w-40 h-px bg-white" />
                    )}
                  </Fragment>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;