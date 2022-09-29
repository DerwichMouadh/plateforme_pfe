import React, { useState, useEffect } from "react";
import RhService from "../services/RhService";
import ProfileUserRow from "./ProfileUserRow";
import {
  CakeIcon,
  BriefcaseIcon,
  LocationMarkerIcon,
  PhoneIcon,
  UserIcon,
  LoginIcon,
  CalendarIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { AtSymbolIcon, DocumentTextIcon } from "@heroicons/react/solid";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  ExclamationCircleIcon,
  TrashIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid";
import {
  ChatIcon,
  PencilAltIcon,
  ClipboardIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

function ProfileUserContent({ id }) {
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

  const [team, setTeam] = useState({});
  useEffect(() => {
    getTeamByUser();
  }, []);
  const getTeamByUser = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/sections/user/${id}`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setTeam(data.data[0]);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  let convDate = new Date(rh.date_of_birth);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const userYear = convDate.getFullYear();
  let age = parseInt(currentYear) - parseInt(userYear);

  let a = "1/4";

  return (
    <div className="bg-myColors-200 flex-col space-y-2 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden text-sm">
      {/* <div>id: {_id}</div>
      <div>{rh.firstname}</div> */}

      {/* Header */}
      <div className="bg-myColors-700 flex justify-between space-x-4 items-center px-8 p-4 rounded-2xl">
        <div className="flex space-x-4">
          <div className="">
            <img
              alt=""
              src={"http://localhost:5000/getImage/" + rh.image}
              width={35}
              height={35}
              layout="fixed"
              className=" object-cover rounded-full"
            />
          </div>
          <div className="flex-col space-y-2">
            <div className="flex space-x-2 items-center">
              <div className=" text-2xl">
                {rh.firstname} {rh.lastname}
              </div>
            </div>
            <div className="flex-col">
              <h2 className="text-myColors-600 font-light text-sm">
                Employee ID:
              </h2>
              <h2 className="text-sm">#{id}</h2>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-grow space-x-2 pl-4">
          <div className="w-1 h-full"></div>
          <div className="flex-col space-y-2 text-myColors-600">
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="w-4 h-4" />
              <h2 className="font-light">Designation:</h2>
              <h2 className="text-white">{rh.designation}</h2>
            </div>
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="w-4 h-4" />
              <h2 className="font-light">Last Login:</h2>
              <h2 className="text-white">5 min. ago</h2>
            </div>
          </div>
        </div> */}
        {/* <div className="flex-col space-y-2">
          <Link href={"/Users/AddToTeam/" + _id} key={_id}>
            <div className=" rounded-xl px-4 bg-myColors-400 text-green-300 hover:text-myColors-400 hover:bg-myColors-600 flex space-x-2 items-center p-2 cursor-pointer">
              <UserGroupIcon className="h-6 w-6" />
              <a>Add to Team</a>
            </div>
          </Link>
          <Link href={"/Users/UpdateUser/" + _id} key={_id}>
            <div className=" rounded-xl px-4 bg-myColors-400 text-green-300 hover:text-myColors-400 hover:bg-myColors-600 flex space-x-2 items-center p-2 cursor-pointer">
              <PencilAltIcon className="h-6 w-6" />
              <a>Update User</a>
            </div>
          </Link>
        </div> */}
      </div>

      {/* Navbar */}
      {/* <div className="bg-myColors-700 flex space-x-6 px-6 py-4 rounded-xl my-2">
        <h2 className="cursor-pointer hover:text-myColors-600 text-myColors-600">About</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Applications</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Teams</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Connenctions</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Files</h2>
      </div> */}

      {/* Content */}
      <div className="grid grid-col-3 grid-flow-col gap-2">
        <div className="row-span-3 bg-myColors-700 p-6 rounded-xl">
          <h2 className="font-fancy mb-4">Personal Information</h2>
          <div className="flex-col space-y-2">
            <ProfileUserRow
              Icon={CakeIcon}
              title="Date of Birth"
              info={convDate.toUTCString().substring(5, 16)}
            />
            <ProfileUserRow Icon={CakeIcon} title="Age" info={age} />
            <ProfileUserRow
              Icon={LocationMarkerIcon}
              title="Location"
              info={rh.location}
            />
            <ProfileUserRow Icon={UserIcon} title="Gender" info={rh.gender} />
            <ProfileUserRow
              Icon={PhoneIcon}
              title="Phone Number"
              info="716-352-7105"
            />
            <ProfileUserRow
              Icon={AtSymbolIcon}
              title="Email address"
              info={rh.email}
            />
          </div>
        </div>

        <div className="row-span-1 col-span-2 bg-myColors-700 p-6 rounded-xl">
          <h2 className="font-fancy mb-4">Professionnel Information</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex col-span-2 space-x-2 bg-myColors-300 rounded-2xl p-2 text-myColors-600">
              <div>
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <div>
                <h2 className=" font-light">Designation</h2>
                <h3 className="text-white">{rh.designation}</h3>
              </div>
            </div>
            <ProfileUserRow
              Icon={CalendarIcon}
              title="Join Date"
              info={new Date(rh.createdAt).toUTCString().substring(5, 16)}
            />
            <ProfileUserRow
              Icon={DocumentTextIcon}
              title="Contrat Type"
              info="CDD"
            />
          </div>
        </div>
        <div className="row-span-2 col-span-2 bg-myColors-700 p-6 rounded-xl">
          <h2 className="font-fancy mb-4">In Progress Files</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserContent;
