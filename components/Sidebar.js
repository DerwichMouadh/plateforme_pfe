import React, { useState, useEffect } from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleDownIcon,
  FingerPrintIcon,
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

  const [click, setClick] = useState(false);

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

  const [sheets, setSheets] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/sheets",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setSheets(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  // let today = [];
  // today = sheets.filter((sheet) => Date(sheet.createdAt) === Date());

  // let ps = {
  //   _id: "46584613",
  //   date: Date.now(),
  //   emplyees: [
  //     { _id: "123", status: "A" },
  //     { _id: "456", status: "A" },
  //     { _id: "789", status: "A" },
  //   ],
  // };

  // let list = ["123", "456", "789"];
  // let list2 = ["A", "A", "A"];

  // let employees = list.map(function (x, i) {
  //   return [x, list2[i]];
  // });

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
              <Link href="/Teams/TeamsList">
                <a className="w-full">
                  <SidebarRow Icon={UserGroupIcon} title="Team Members" />
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
      <div className=" bg-myColors-300 rounded-2xl justify-center flex items-center space-y-4 p-3 text-white">
        {click && (
          <FingerPrintIcon className="h-10 w-10 text-myColors-600" />
        )}
        {!click && (
          <FingerPrintIcon onClick={() => setClick(true)} className="h-10 w-10 cursor-pointer hover:text-myColors-600" />
        )}
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
