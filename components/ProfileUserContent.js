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
import { ChatIcon, PencilAltIcon } from "@heroicons/react/outline";
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

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/sections",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setTeams(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

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
          setTeam(data.data[1]);
          
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
    <div className="bg-myColors-200 flex-col space-y-4  rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden text-sm">
      {/* <div>id: {id}</div>
      <div>{rh.firstname}</div> */}

      {/* Header */}
      <div className=" bg-myColors-700 flex justify-between space-x-4 items-center px-8 p-4 rounded-2xl">
        <div className="flex space-x-6">
          <div className="bg-white rounded-full w-20 h-20"></div>
          <div className="flex-col space-y-2">
            <div className="flex space-x-2 items-center">
              <div className=" text-2xl">
                {rh.firstname} {rh.lastname}
              </div>
              <div className="bg-green-500 w-2 h-2 rounded-full"></div>
            </div>
            <div className="flex-col">
              <h2 className="text-myColors-600 font-light">Employee ID:</h2>
              <h2>#{id}</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-1 h-full"></div>
          <div className="flex-col space-y-2 text-myColors-600">
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="w-4 h-4" />
              <h2 className="font-light">Designation:</h2>
              <h2 className="text-white">{rh.designation}</h2>
            </div>
            <div className="flex items-center space-x-2">
              <LoginIcon className="w-4 h-4" />
              <h2 className="font-light">Last Login:</h2>
              <h2 className="text-white">5 min. ago</h2>
            </div>
          </div>
        </div>
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
      <div className="grid grid-col-3 grid-flow-col gap-4">
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
              info="+21623207094"
            />
          </div>
        </div>

        <div className="col-span-2 bg-myColors-700 p-6 rounded-xl">
          <h2 className="font-fancy mb-4">Your team&apos;s tasks</h2>
          <div className="flex-col space-y-4">
            <div className="flex-col space-y-1">
              <h2>Task 1</h2>
              <div className="flex items-center border-2 border-green-500 w-full h-3 rounded-full">
                <div
                  className={`bg-green-500 rounded-full w-${a} h-3 -ml-[1px]`}
                ></div>
              </div>
              <p className="text-xs text-gray-400">
                25% of the task are completed.
              </p>
            </div>
            <div className="flex-col space-y-1">
              <h2>Task 2</h2>
              <div className="flex items-center border-2 border-green-500 w-full h-3 rounded-full">
                <div className="bg-green-500 rounded-full w-3/4 h-3 -ml-[1px]"></div>
              </div>
              <p className="text-xs text-gray-400">
                75% of the task are completed.
              </p>
            </div>
            <div className="flex-col space-y-1">
              <h2>Task 3</h2>
              <div className="flex items-center border-2 border-green-500 w-full h-3 rounded-full">
                <div className="bg-green-500 rounded-full w-4/5 h-3 -ml-[1px]"></div>
              </div>
              <p className="text-xs text-gray-400">
                80% of the task are completed.
              </p>
            </div>
          </div>
        </div>

        <div className="row-span-2 col-span-2 bg-myColors-700 p-6 rounded-xl">
          <h2 className="font-fancy mb-4">Professionnel Information</h2>
          <div className="grid grid-cols-2 gap-2">
            <ProfileUserRow
              Icon={CalendarIcon}
              title="Join Date"
              info={new Date(rh.createdAt).toUTCString().substring(5, 16)}
            />
            <ProfileUserRow
              Icon={BriefcaseIcon}
              title="Contrat Type"
              info="CDD"
            />
            <ProfileUserRow
              Icon={CakeIcon}
              title="Date of Birth"
              info={convDate.toUTCString().substring(5, 16)}
            />
            <ProfileUserRow
              Icon={CakeIcon}
              title="Date of Birth"
              info={convDate.toUTCString().substring(5, 16)}
            />
            <div className="flex col-span-2 space-x-2 bg-myColors-300 rounded-2xl p-3 text-myColors-600">
              <div>
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <div>
                <h2 className=" font-light">Teams</h2>
                <div className="text-white flex-col space-y-4 mt-4">{team.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserContent;
