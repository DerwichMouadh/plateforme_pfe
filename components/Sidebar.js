import React, { useState, useEffect } from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/solid";
import {
  UserIcon,
  UserAddIcon,
  ClipboardListIcon,
  ClipboardIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  CogIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

import {
  ArrowCircleDownIcon as ACDI,
  ArrowCircleUpIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import Link from "next/link";
import axios from "axios";

import Image from "next/image";
import logo from "../images/logo_1.png";

function Sidebar({ token, id }) {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toUTCString().substring(0, 16);
  const [currTime, setCurrTime] = useState(time);
  const [currDate, setCurrDate] = useState(date);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  const updateDate = () => {
    date = new Date().toUTCString().substring(5, 16);
    setCurrDate(date);
  };
  setInterval(updateTime, 1000);
  setInterval(updateDate, 1000);

  const [open, setOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const [files, setFiles] = useState([]);
  let filtredFiles = [];

  useEffect(() => {
    getall();
  }, []);

  const getall = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/filerequests/all`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setFiles(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };
  let user = [];
  filtredFiles = files.filter((file) => file.status === "In Progress");
  user = filtredFiles.filter((file) => file.user._id === id);
  let num = user.length;

  //Quotes;
  const url = "https://type.fit/api/quotes";
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    let n = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    axios.get(url).then((res) => {
      setQuotes(res.data[n]);
      console.log(res.data[n]);
    });
  }, [url]);

  return (
    <div className="bg-myColors-100 p-4 pb-8 text-sm font-medium w-2/12 min-w-[200px] flex flex-col space-y-3 h-screen">
      <div className="pl-6">
        <Link href="/Overview">
          <a className="text-2xl font-bold text-white font-fancy">
            <Image
              alt="logo"
              src={logo}
              priority
              width="80"
              height="80"
              className=" object-contain"
            />
          </a>
        </Link>
      </div>
      <div className="flex-grow scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
          <Link href="/Overview">
            <a className="w-full">
              <SidebarRow Icon={ViewGridIcon} title="Overview" />
            </a>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex hover:rounded-2xl group hover:bg-myColors-300"
        >
          <a className="w-full">
            <SidebarRow
              Icon={UserIcon}
              title="Users"
              Plus={!open ? ArrowCircleRightIcon : ArrowCircleDownIcon}
            />
          </a>
        </div>
        <div className={`${open ? "block" : "hidden"} flex flex-col`}>
          <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
            <Link href="/Users/AddUser" className="">
              <a className="w-full">
                <SidebarRow Icon={UserAddIcon} title="Add User" color />
              </a>
            </Link>
          </div>
          <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
            <Link href="/Users/UserList">
              <a className="w-full">
                <SidebarRow Icon={ClipboardListIcon} title="User List" color />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex pr-5 items-center hover:rounded-2xl mb-1 group hover:bg-myColors-300">
          <Link href="/FileRequest/FileRequestList">
            <a className="w-full relative">
              <SidebarRow Icon={ClipboardIcon} title="Files" />
            </a>
          </Link>
          <div className="text-center text-xs font-bold bg-myColors-600 rounded-full text-myColors-300 w-[16px] h-[16px]">
            {num}
          </div>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
          <Link href="/Tasks">
            <a className="w-full">
              <SidebarRow Icon={ClipboardCheckIcon} title="Tasks" />
            </a>
          </Link>
        </div>

        {openMore && (
          <div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
              <Link href="/Schedule">
                <a className="w-full">
                  <SidebarRow Icon={CalendarIcon} title="Schedule" />
                </a>
              </Link>
            </div>

            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={CogIcon} title="Settings" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
              <Link href="/Teams/TeamsList">
                <a className="w-full">
                  <SidebarRow Icon={UserGroupIcon} title="Team Members" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={ViewGridIcon} title="Overview 1" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={ViewGridIcon} title="Overview 2" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl relative group hover:bg-myColors-300 ">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={ViewGridIcon} title="Overview 3" />
                </a>
              </Link>
            </div>
          </div>
        )}
        <div
          onClick={() => setOpenMore(!openMore)}
          className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 "
        >
          <a className="w-full">
            {!openMore && <SidebarRow Icon={ACDI} title="See more" />}
            {openMore && (
              <SidebarRow Icon={ArrowCircleUpIcon} title="See less" />
            )}
          </a>
        </div>
      </div>
      <div className=" bg-myColors-300 rounded-2xl flex items-center space-y-4 h-[250px] min-h-[250px] p-3 text-white">
        <div className="flex-col space-y-6">
          <div className="">
            <LightBulbIcon className="h-10 w-10 mx-auto" />
          </div>
          <div className=" text-center font-fancy">{quotes.text}</div>
          <div className="text-right text-xs text-myColors-600">
            {quotes.author}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
