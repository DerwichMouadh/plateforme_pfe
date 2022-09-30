import React from "react";
import Image from "next/image";
import { CheckCircleIcon, MinusCircleIcon, ExclamationCircleIcon, TrashIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";
import axios from "axios";


function FileRequestRow({ id, name, wording, status, date, token, getAll, number }) {

  let convDate = new Date(date);
  convDate.setHours(convDate.getHours() + 1);
  // let sec = convDate.getTime() / 1000;
  // let v = (sec + 3600) * 1000;
  
  const updateFileReady = (id) => {
    const body = { status: "Ready" }
    const config = {
      method: "PUT",
      url: `http://localhost:5000/filerequests/filerequest/${id}`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      data: body,
    };
    axios(config)
      .then((res) => {
        getAll();
      })
  }

  const updateFileRefused = (id) => {
    const body = { status: "Refused" }
    const config = {
      method: "PUT",
      url: `http://localhost:5000/filerequests/filerequest/${id}`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      data: body,
    };
    axios(config)
      .then((res) => {
        getAll();
      })
  }

  return (
    <div className="flex h-11 items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl">
      
      <h4 className="w-5/12 pl-6">{wording}</h4>
      <h4 className="w-2/12">{status}</h4>
      <h4 className="w-4/12">{convDate.toUTCString().substring(0, 22)}</h4>
      
      <div className="w-1/12 flex justify-center">
        {status === "Ready" && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
        {status === "Refused" && <MinusCircleIcon className="h-5 w-5 text-red-500" />}
        {status === "In Progress" && <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />}
      </div>
    </div>
  );
}

export default FileRequestRow