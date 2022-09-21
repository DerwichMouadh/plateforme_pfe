import { SearchIcon, ClockIcon } from "@heroicons/react/outline";
import {
  ClipboardCheckIcon,
  UserIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import RowCard from "./RowCard";
import SmallSquare from "./SmallSquare";
import Link from "next/link";
import io from "socket.io-client";

function RightSidebar() {

  return (
    <div className="bg-myColors-100 text-white pt-6 pb-8 px-4 text-sm w-3/12 min-w-[200px] flex flex-col h-screen">
      {/* <div className="flex h-11 cursor-pointer items-center rounded-xl bg-myColors-200 mb-6">
        <input
          className="pl-4 flex-grow h-full text-sm focus:ring-0 focus:border-0 font-normal rounded-bl-xl rounded-tl-xl text-white items-center bg-transparent outline-none border-0"
          type="text"
          placeholder="Find something..."
        />
        <SearchIcon className="h-10 w-10 px-2 hover:opacity-100 text-white opacity-60" />
      </div> */}
      {/* <div className="flex-grow flex-col space-y-3">
        <h2 className="font-semibold text-xl font-fancy">Admin Panel</h2>
        <div className="flex-col space-y-4 pt-1">
          <div className=" bg-myColors-300 group p-5 rounded-xl flex items-center space-x-6 cursor-pointer hover:bg-green-500">
            <Link href="/AssignTasks">
              <a className="w-full flex space-x-6">
                <div>
                  <ClipboardCheckIcon className="h-10 w-10 text-green-500 bg-green-200 p-1 rounded-xl" />
                </div>
                <div className="flex-col space-y-1">
                  <p className=" font-medium">Assign Tasks</p>
                  <p className="text-xs text-gray-500 group-hover:text-white">
                    Assign tasks to your teams
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className=" bg-myColors-300 group p-5 rounded-xl flex items-center space-x-6 cursor-pointer hover:bg-violet-500">
            <div>
              <ClipboardCheckIcon className="h-10 w-10 text-violet-500 bg-violet-200 p-1 rounded-xl" />
            </div>
            <div className="flex-col space-y-1">
              <p className="font-medium">Assign Tasks</p>
              <p className="text-xs text-gray-500 group-hover:text-white">
                Assign tasks to your teams
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-myColors-300 rounded-2xl px-6 py-[14px] text-white">
        <div className="text-center">{new Date().toUTCString().substring(0, 16)}</div>
      </div>

      <div className="flex-col flex-grow scrollbar scrollbar-thumb-hidden scrollbar-track-hidden mt-12">
        <h2 className="fixed bg-myColors-100 font-semibold text-xl w-full pb-4 z-50 font-fancy">
          Your team&apos;s chat
        </h2>
        <div className="pt-9">
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
          <RowCard
            Icon={UserIcon}
            fullName="Mustapha El Masri"
            msg="Liverpool and Man City stars show why they are most popular premium picks in 2022/23 Fantasy."
            group={new Date().toUTCString().substring(0, 22)}
          />
        </div>
      </div>
      <div className="flex cursor-pointer items-center rounded-xl bg-myColors-200 mt-4">
        <input
          className="pl-4 flex-grow h-full text-sm focus:ring-0 focus:border-0 font-normal rounded-bl-xl rounded-tl-xl text-white items-center bg-transparent outline-none border-0"
          type="text"
          placeholder="Say something..."
        />
        <button>
          <PaperAirplaneIcon className="h-10 w-10 px-2 hover:opacity-100 text-white opacity-60 rotate-90" />
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
