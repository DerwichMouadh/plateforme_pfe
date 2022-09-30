import React from "react";
import { useEffect, useState, useRef } from "react";
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
import { useRouter } from "next/router";

function NewFileContent({ token, id }) {
  const [data, setData] = useState({});
  const input1 = useRef();
  const router = useRouter();

  const [file, setFile] = useState({
    wording: "",
    user: id,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "post",
      url: "http://localhost:5000/FileRequests/create",
      headers: {},
      data: file,
    };
    axios(config)
      .then((response) => {
        router.push("/FileRequest/FileRequestList");
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error");
      });
  }

  function handleInputChange(e, setUser) {
    const fieldName = e.target.name;
    setFile((prevUser) => {
      return { ...prevUser, [fieldName]: e.target.value };
    });
  }

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-4 pb-0 p-8 text-white  text-xs scrollbar scrollbar-thumb-hidden scrollbar-track-hidden flex flex-col">
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 font-fancy">
                  New File
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  The response might take a few days, so be patient.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-2xl sm:overflow-hidden">
                  <div className="px-4 py-5 bg-myColors-100 space-y-6 sm:p-6">
                    <div className="col-span-6 sm:col-span-2 pb-40">
                      <label
                        htmlFor="wording"
                        className="block text-sm font-medium text-gray-200 pl-4"
                      >
                        Wording
                      </label>
                      <select
                        type="text"
                        ref={input1}
                        name="wording"
                        id="wording"
                        onChange={(e) => {
                          handleInputChange(e, setFile);
                        }}
                        //onChange={onChangeHandler}
                        autoComplete="country-name"
                        className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                      >
                        <option
                          value="Certificate of Attendance"
                          className="text-gray-500 bg-gray-300"
                        >
                          Certificate of Attendance
                        </option>
                        <option
                          value="Graduation Certificate"
                          className="text-gray-500 bg-gray-300"
                        >
                          Graduation Certificate
                        </option>
                        <option
                          value="Employee Contract"
                          className="text-gray-500 bg-gray-300"
                        >
                          Employee Contract
                        </option>
                        <option
                          value="Job Descriptions and Responsibilities"
                          className="text-gray-500 bg-gray-300"
                        >
                          Job Descriptions and Responsibilities
                        </option>
                        <option
                          value="Discipline Records"
                          className="text-gray-500 bg-gray-300"
                        >
                          Discipline Records
                        </option>
                        <option
                          value="Attendance Records"
                          className="text-gray-500 bg-gray-300"
                        >
                          Attendance Records
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-myColors-300 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NewFileContent;
