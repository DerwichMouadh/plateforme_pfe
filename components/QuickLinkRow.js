import React from "react";
import {
  PencilAltIcon,
  XCircleIcon,
  CakeIcon,
  SpeakerphoneIcon,
  LinkIcon,
  ClipboardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

function QuickLinkRow({title, link}) {
  return (
    <div className="flex justify-between items-center bg-myColors-300 px-4 p-3 rounded-2xl">
      <div className="flex space-x-3 items-center">
        <div>
          <LinkIcon className="h-6 w-6 text-myColors-600" />
        </div>
        <div className="text-sm text-myColors-600">{title}</div>
      </div>
      <div className="text-gray-400 hover:text-white">
        <a target=" blank" href={`${link}`}>
          <ExternalLinkIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default QuickLinkRow;
