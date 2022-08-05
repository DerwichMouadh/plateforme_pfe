import React, { useState, useEffect } from "react";
import RhService from "../services/RhService";
import ProfileUserRow from "./ProfileUserRow";
import { CakeIcon, BriefcaseIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { ChatIcon, PencilAltIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

function ProfileUserContent({ _id }) {
  const [rh, setRh] = useState([]);
  const getById = () => {
    RhService.getById(_id)
      .then((res) => {
        console.log(res.data.data);
        console.log("profileUser: " + _id);
        setRh(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getById();
  }, [_id]);

  let convDate = new Date(rh.date_of_birth)
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const userYear = convDate.getFullYear()
  let age = parseInt(currentYear) - parseInt(userYear)

  return (
    <div className="bg-myColors-200 flex-col rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden text-sm">
      {/* <div>id: {_id}</div>
      <div>{rh.firstname}</div> */}

      {/* Header */}
      <div className="bg-myColors-700 flex space-x-4 items-center p-4 rounded-2xl">
        <div className="bg-white rounded-full w-20 h-20"></div>
        <div className="flex-col space-y-2">
          <div className="flex space-x-2 items-center">
            <div className=" text-2xl">{rh.firstname} {rh.lastname}</div>
            <div className="bg-green-500 w-2 h-2 rounded-full"></div>
          </div>
          <div className="flex-col">
            <h2 className="text-myColors-600 font-light">Employee ID:</h2>
            <h2>#{_id}</h2>
          </div>
        </div>
        <div className="flex flex-grow space-x-2 pl-4">
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
        </div>
        <div className="flex-col space-y-2">
          <Link href="/">
            <div className=" rounded-xl px-4 bg-myColors-400 text-green-300 hover:text-myColors-400 hover:bg-myColors-600 flex space-x-2 items-center p-2 cursor-pointer">
              <ChatIcon className="h-6 w-6" />
              <a>Message</a>
            </div>
          </Link>
          <Link href="/">
            <div className=" rounded-xl px-4 bg-myColors-400 text-green-300 hover:text-myColors-400 hover:bg-myColors-600 flex space-x-2 items-center p-2 cursor-pointer">
              <PencilAltIcon className="h-6 w-6" />
              <a>Edit Profile</a>
            </div>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-myColors-700 flex space-x-6 px-6 py-4 rounded-xl my-2">
        <h2 className="cursor-pointer hover:text-myColors-600 text-myColors-600">About</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Applications</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Teams</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Connenctions</h2>
        <h2 className="cursor-pointer hover:text-myColors-600">Files</h2>
      </div>

      {/* Content */}
      <div className="flex justify-between">
        <div className="bg-myColors-700 w-1/3 p-6 rounded-xl mr-1 -mb-2">
          <h2 className="font-fancy mb-4">Personal Information</h2>
          <div className="flex-col space-y-2">
            <ProfileUserRow
              Icon={CakeIcon}
              title="Date of Birth"
              info={convDate.toUTCString().substring(5, 16)}
            />
            <ProfileUserRow
              Icon={CakeIcon}
              title="Age"
              info={age}
            />
            <ProfileUserRow
              Icon={LocationMarkerIcon}
              title="Location"
              info={rh.location}
            />
            <ProfileUserRow
              Icon={CakeIcon}
              title="Gender"
              info={rh.gender}
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

          </div>
        </div>

        <div className="w-2/3 ml-1">
          <div className=" bg-myColors-700 p-6 rounded-xl h-1/4 mb-2">
            <h2 className="font-fancy mb-4">Tasks</h2>
            <div className="flex items-center border-2 border-green-500 w-full h-3 rounded-full">
              <div className="bg-green-500 rounded-full w-3/4 h-3"></div>
            </div>
            <p className="mt-2 text-xs">75% of tasks completed.</p>
          </div>
          <div className="bg-myColors-700 p-6 rounded-xl h-3/4">
            <h2 className="font-fancy mb-4">Professionnel Information</h2>
            <div className="grid grid-cols-2 gap-2">
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
              <div className="flex col-span-2 space-x-2 bg-myColors-300 rounded-2xl p-2 text-myColors-600">
                <div>
                  <CakeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className=" font-light">Teams</h2>
                  <div className="text-white flex-col space-y-4 mt-8">
                    <div className="flex space-x-4">
                      <h2 className="flex-grow">Product UI/UX</h2>
                      <div>AAAA</div>
                    </div>
                    <div className="flex space-x-4">
                      <h2 className="flex-grow">QA Team</h2>
                      <div>AAAA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserContent;
