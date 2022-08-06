import React from "react";

function RowCard({ Icon, fullName, group }) {
  return (
    <div className="flex group space-x-4 bg-myColors-300 rounded-2xl p-3 mt-2">
      <div className="">
        <Icon className="h-8 w-8 rounded-full bg-yellow-500 p-1" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xs text-gray-500 pb-1">
          {group}
        </h3>
        <h2 className="font-medium">{fullName}</h2>
      </div>
    </div>
  );
}

export default RowCard;
