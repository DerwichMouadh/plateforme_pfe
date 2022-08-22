import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  BellIcon,
} from "@heroicons/react/solid";
import {
  MenuAlt1Icon,
  CogIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import RhService from "../services/RhService";

function Navbar({ navBarTitle_1, navBarTitle_2, id }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const logout = () => {
    cookie.remove("token");
    cookie.remove("email");

    router.push("/");
  };

  const [rh, setRh] = useState([]);
  const getById = () => {
    RhService.getById(id)
      .then((res) => {
        console.log(res.data.data);
        console.log("profileUser: " + id);
        setRh(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getById();
  }, [id]);

  return (
    <div className="flex items-center pt-6">
      <div className="flex flex-grow items-end space-x-2">
        <MenuAlt1Icon className="h-8 w-8 text-white mr-4" />
        <h3 className="font-semibold text-2xl text-white font-fancy">
          {navBarTitle_1}
        </h3>
        <ChevronRightIcon className=" text-white w-5 h-5" />
        <h4 className="text-myColors-600 font-semibold font-fancy">
          {navBarTitle_2}
        </h4>
      </div>
      <div className="flex space-x-1 ">
        <NavbarItem Icon={BellIcon} alert={true} />
        <div onClick={logout} className="relative group">
          <NavbarItem Icon={LogoutIcon} />
          <div
            className={` group-hover:block hidden text-xs text-center absolute right-0 top-[51px] bg-myColors-200 text-myColors-400 rounded px-1`}
          >
            LogOut
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-white flex space-x-2 items-center cursor-pointer px-2 relative hover:bg-myColors-200 bg-myColors-100 rounded-2xl"
        >
          <Image
            alt=""
            src="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F02%2F1192510411-850x560.jpeg"
            width={35}
            height={35}
            layout="fixed"
            className=" object-cover rounded-full"
          />
          <p className="text-sm">{rh.firstname} {rh.lastname}</p>
          {!open && <ChevronDownIcon className="h-6 w-6" />}
          {open && <ChevronUpIcon className="h-6 w-6" />}
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } absolute bg-myColors-200 hover:bg-myColors-400 right-0 top-[75px] flex space-x-4 p-1 px-4 rounded-xl text-myColors-400 hover:text-myColors-200 cursor-pointer`}
        >
          <UserCircleIcon className="w-6 h-6" />
          <Link href="/Profile">
            <button>My profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
