import React, { useEffect, useState } from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import UserRow from "./UserRow";
import Pagination from "./Pagination";
import RhsServices from "../services/RhService";

function UserListContent({ token }) {

  const [rhs, setRhs] = useState([]);
  const getAll = () => {
    RhsServices.getAll()
      .then((res) => {
        setRhs(res.data.data);
        
        console.log(token)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-16 pb-24 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="flex-col space-y-2">
        {rhs?.map(({ _id, firstname, lastname, date_of_birth, gender, role, image, email, location, designation , ...section}, i) => (
          <UserRow
            id={_id}
            getAll={getAll}
            key={_id}
            number={i}
            firstname={firstname}
            lastname={lastname}
            location={location}
            designation={designation}
            date_of_birth={date_of_birth}
            email={email}
            gender={gender}
            _id={_id}
            image={image}
            role={role}
            token={token}
            section={section}
          />
        ))}
      </div>
    </div>
  );
}
export default UserListContent;