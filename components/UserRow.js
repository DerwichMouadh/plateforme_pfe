import React from "react";
import Image from "next/image";
import {
  PencilAltIcon,
  TrashIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";
import { requirePageAuth } from "../utils/auth";
import axios from "axios";

function UserRow({
  id,
  _id,
  firstname,
  lastname,
  date_of_birth,
  gender,
  role,
  email,
  location,
  designation,
  number,
  image,
  getAll,
  token,
  ...section
}) {
  const deleteRh = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "DELETE",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  //////
  console.log("yyyyyyyyy"+ section);

  return (
    <div className="flex items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl cursor-pointer">
      <h4 className="w-1/12 text-center">{number}</h4>
      <div className="w-4/12 flex items-center space-x-2">
        <img
          alt=""
          src={"http://localhost:5000/getImage/" + image}
          width={35}
          height={35}
          layout="fixed"
          className=" object-cover rounded-full"
        />
        <h4 className="">
          {firstname} {lastname}
        </h4>
      </div>
      <h4 className="w-3/12">{designation}</h4>
      <h4 className="w-2/12">{section.name}</h4>
      <div className="w-2/12 flex">
        <Link href={"/Users/ProfileUser/" + _id} key={_id}>
          <a>
            <ExternalLinkIcon className="h-9 w-9 hover:bg-myColors-200 text-yellow-500 p-2 rounded-xl" />
          </a>
        </Link>
        <Link href={"/Users/UpdateUser/" + _id} key={_id}>
          <a>
            <PencilAltIcon className="h-9 w-9 hover:bg-myColors-200 text-myColors-600 p-2 rounded-xl" />
          </a>
        </Link>
        <TrashIcon
          className="h-9 w-9 hover:bg-myColors-200 text-red-500 p-2 rounded-xl"
          onClick={(e) => deleteRh(id)}
        />
      </div>
    </div>
  );
}
export const getServerSideProps = requirePageAuth;

export default UserRow;
