import React from "react";

function RowCard({ Icon, fullName, msg, group }) {
  return (
    <div className="flex group space-x-4 bg-myColors-300 rounded-2xl p-3 mt-2">
      <div className="">
        <Icon className="h-8 w-8 rounded-full bg-green-500 p-1" />
      </div>
      <div className="flex-grow">
        <h2 className="text-myColors-600 font-medium">{fullName}</h2>
        <p className=" text-sm text-gray-300 py-1">{msg}</p>
        <h3 className="text-xs text-right text-gray-500">{group}</h3>
      </div>
    </div>
  );
}

export default RowCard;
