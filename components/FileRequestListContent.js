import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FileRequestRow from "./FileRequestRow";
import Pagination from "../components/Pagination";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentAddIcon,
} from "@heroicons/react/solid";
import { data } from "autoprefixer";
import Link from "next/link";

function FileRequestListContent({ token, id }) {
  const [ready, setReady] = useState(false);
  const [inprogress, setInprogress] = useState(false);
  const [refused, setRefused] = useState(false);
  const [all, setAll] = useState(true);

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const PAGE_SIZE = 3;

  const [files, setFiles] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
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
  user = files.filter((file) => file.user._id === id);

  const goToPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goToNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-4 pb-0 p-8 text-white  text-xs scrollbar scrollbar-thumb-hidden scrollbar-track-hidden flex flex-col">
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="">
            <p className=" text-xl">Filter</p>
            <div className="my-2 flex-col space-x-2">
              <button
                className={`${
                  ready ? "bg-myColors-600" : "bg-myColors-500"
                } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
                onClick={() => {
                  setReady(true);
                  setInprogress(false);
                  setRefused(false);
                  setAll(false);
                }}
              >
                Ready
              </button>
              <button
                className={`${
                  inprogress ? "bg-myColors-600" : "bg-myColors-500"
                } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
                onClick={() => {
                  setReady(false);
                  setInprogress(true);
                  setRefused(false);
                  setAll(false);
                }}
              >
                In Progress
              </button>
              <button
                className={`${
                  refused ? "bg-myColors-600" : "bg-myColors-500"
                } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
                onClick={() => {
                  setReady(false);
                  setInprogress(false);
                  setRefused(true);
                  setAll(false);
                }}
              >
                Refused
              </button>
              <button
                className={`${
                  all ? "bg-myColors-600" : "bg-myColors-500"
                } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
                onClick={() => {
                  setReady(false);
                  setInprogress(false);
                  setRefused(false);
                  setAll(true);
                }}
              >
                All
              </button>
            </div>
          </div>
          <div>
            <div className="">
              <Link href="/FileRequest/NewFile">
                <a className="w-full">
                  <div className="flex items-center space-x-2 rounded-lg relative group bg-myColors-600 text-myColors-400 hover:text-myColors-600 hover:bg-myColors-400 p-2">
                    <DocumentAddIcon className="h-6 w-6" />
                    <p className=" text-base">Request file</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 mb-4 rounded-2xl bg-myColors-200">
          <div className="flex text-white text-sm">
            <h4 className="w-5/12 pl-6">Wording</h4>
            <h4 className="w-2/12">Status</h4>
            <h4 className="w-4/12">Date</h4>
            <h4 className="w-1/12 text-center">Notif.</h4>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>

        <div className="flex-col space-y-2">
          {ready &&
            user
              ?.filter((file) => file.status === "Ready")
              .map(({ _id, name, wording, status, createdAt }, i) => (
                <FileRequestRow
                  id={_id}
                  getAll={getAll}
                  key={_id}
                  number={i}
                  name={name}
                  wording={wording}
                  _id={_id}
                  status={status}
                  date={createdAt}
                  token={token}
                />
              ))}
          {inprogress &&
            user
              ?.filter((file) => file.status === "In Progress")
              .map(({ _id, name, wording, status, createdAt }, i) => (
                <FileRequestRow
                  id={_id}
                  getAll={getAll}
                  key={_id}
                  number={i}
                  name={name}
                  wording={wording}
                  _id={_id}
                  status={status}
                  date={createdAt}
                  token={token}
                />
              ))}
          {refused &&
            user
              ?.filter((file) => file.status === "Refused")
              .map(({ _id, name, wording, status, createdAt }, i) => (
                <FileRequestRow
                  id={_id}
                  getAll={getAll}
                  key={_id}
                  number={i}
                  name={name}
                  wording={wording}
                  _id={_id}
                  status={status}
                  date={createdAt}
                  token={token}
                />
              ))}
          {all &&
            user.map(({ _id, name, wording, status, createdAt }, i) => (
              <FileRequestRow
                id={_id}
                getAll={getAll}
                key={_id}
                number={i}
                name={name}
                wording={wording}
                _id={_id}
                status={status}
                date={createdAt}
                token={token}
              />
            ))}
        </div>
      </div>

      
    </div>
  );
}

export default FileRequestListContent;
