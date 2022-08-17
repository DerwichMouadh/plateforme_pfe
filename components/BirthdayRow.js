import React from "react";
import { UserIcon } from "@heroicons/react/solid";

function BirthdayRow({ firstname, lastname, age }) {
  return (
    <div className="flex space-x-4 items-center bg-myColors-300 px-4 p-3 rounded-2xl ">
      <div>
        <UserIcon className="h-8 w-8 rounded-full bg-green-500 p-1" />
      </div>
      <div>
        <div className="text-sm text-myColors-600">
          {firstname} {lastname}
        </div>
        <div className="text-xs text-gray-300">{age} years old</div>
      </div>
    </div>
  );
}

export default BirthdayRow;
