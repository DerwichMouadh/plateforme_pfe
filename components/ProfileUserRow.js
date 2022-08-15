import React from "react";

function ProfileUserRow({ Icon, title, info }) {
  return (
    <div className="flex items-center space-x-3 bg-myColors-300 rounded-2xl p-3 text-myColors-600">
      <div>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h2 className=" font-light">{title}</h2>
        <h3 className="text-white">{info}</h3>
      </div>
    </div>
  );
}

export default ProfileUserRow;
