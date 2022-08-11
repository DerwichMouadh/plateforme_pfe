import React, { useState, useEffect } from "react";
import {
  PencilAltIcon,
  XCircleIcon,
  CakeIcon,
  SpeakerphoneIcon,
  LinkIcon,
  ClipboardIcon,
  DocumentSearchIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import axios from "axios";
import BarChart from "./Charts/BarChart";
import BarChart2 from "./Charts/BarChart2";
import DoughnutChart from "./Charts/DoughnutChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import RadarChart from "./Charts/RadarChart";
import AnnouncRow from "./AnnouncRow";

function HomeContent() {
  const [files, setFiles] = useState([]);
  const [users, setUsers] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [weddings, setWeddings] = useState([]);
  const [holidays, setHolidays] = useState([]);

  let filtredFilesInProgress = [];
  let filtredFilesReady = [];
  let filtredFilesRefused = [];

  let filtred1825 = [];
  let filtred2635 = [];
  let filtred3544 = [];
  let filtredsup44 = [];

  let totalFemaleTab = [];
  let totalMaleTab = [];

  useEffect(() => {
    getallInProgress();
    getallUsers();
    getallAnnouncements();
    getallWeddings();
    getallHolidays();
  }, []);

  const getallInProgress = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/filerequests/inprogress`,
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

  const getallUsers = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/users/`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setUsers(data.data);
          console.log(users);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const getallAnnouncements = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/announcements/`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setAnnouncements(data.data);
          console.log(announcements);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const getallWeddings = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/weddings/`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setWeddings(data.data);
          console.log(weddings);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const getallHolidays = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/annualholidays/`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setHolidays(data.data);
          console.log(holidays);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  filtredFilesInProgress = files.filter(
    (file) => file.status === "In Progress"
  );
  filtredFilesReady = files.filter((file) => file.status === "Ready");
  filtredFilesRefused = files.filter((file) => file.status === "Refused");

  let numInProgress = filtredFilesInProgress.length;
  let numReady = filtredFilesReady.length;
  let numRefused = filtredFilesRefused.length;

  totalFemaleTab = users.filter((user) => user.gender === "Female");
  totalMaleTab = users.filter((user) => user.gender === "Male");

  let totalFemale = totalFemaleTab.length;
  let totalMale = totalMaleTab.length;

  let totalFemalePer = (100 * totalFemale) / (totalFemale + totalMale);
  let totalMalePer = (100 * totalMale) / (totalFemale + totalMale);

  filtred1825 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userYear = convDate.getFullYear();
    let age = parseInt(currentYear) - parseInt(userYear);
    return age > 11 && age < 25;
  });
  filtred2635 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userYear = convDate.getFullYear();
    let age = parseInt(currentYear) - parseInt(userYear);
    return age > 24 && age < 35;
  });
  filtred3544 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userYear = convDate.getFullYear();
    let age = parseInt(currentYear) - parseInt(userYear);
    return age > 34 && age < 45;
  });
  filtredsup44 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userYear = convDate.getFullYear();
    let age = parseInt(currentYear) - parseInt(userYear);
    return age > 44;
  });

  let total1825 = filtred1825.length;
  let total2635 = filtred2635.length;
  let total3544 = filtred3544.length;
  let totalsup44 = filtredsup44.length;

  let total1825per =
    (100 * total1825) / (total1825 + total2635 + total3544 + totalsup44);
  let total2635per =
    (100 * total2635) / (total1825 + total2635 + total3544 + totalsup44);
  let total3544per =
    (100 * total3544) / (total1825 + total2635 + total3544 + totalsup44);
  let totalsup44per =
    (100 * totalsup44) / (total1825 + total2635 + total3544 + totalsup44);

  const [first, setFirst] = useState(1);
  const [openAnnounc, setOpenAnnounc] = useState(false);

  return (
    <div className="bg-myColors-200 rounded-2xl grid grid-cols-6 gap-4 w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3 min-h-96">
        <h1 className="text-center text-lg pb-8">Birthday</h1>
        {first === 0 && (
          <div className="grid place-items-center py-20">
            <CakeIcon className="h-20 w-20 text-myColors-600" />
            <div className=" text-sm text-gray-500 pt-2">
              No birthdays today
            </div>
          </div>
        )}
        {first === 1 && (
          <div className="flex-col space-y-2">
            <div className="flex space-x-4 items-center bg-myColors-300 px-4 p-3 rounded-2xl cursor-pointer hover:bg-myColors-200">
              <div>
                <UserIcon className="h-8 w-8 rounded-full bg-green-500 p-1" />
              </div>
              <div>
                <div className="text-sm text-myColors-600">
                  Mustapha El Masri
                </div>
                <div className="text-xs text-gray-300">24 yers old</div>
              </div>
            </div>
            <div className="flex space-x-4 items-center bg-myColors-300 px-4 p-3 rounded-2xl cursor-pointer hover:bg-myColors-200">
              <div>
                <UserIcon className="h-8 w-8 rounded-full bg-violet-500 p-1" />
              </div>
              <div>
                <div className="text-sm text-myColors-600">Mouadh Derwich</div>
                <div className="text-xs text-gray-300">24 yers old</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3 min-h-96">
        <h1 className="text-center text-lg pb-8">Announcements</h1>
        {announcements.length === 0 && (
          <div className="grid place-items-center py-20">
            <SpeakerphoneIcon className="h-20 w-20 text-myColors-600" />
            <div className=" text-sm text-gray-500 pt-2">No announcements</div>
          </div>
        )}
        {announcements.length !== 0 && (
          <div className="flex-col space-y-2">
            {announcements.map(({ _id, title, description, createdAt }) => (
              <AnnouncRow
                key={_id}
                title={title}
                description={description}
                createdAt={createdAt}
              />
            ))}
          </div>
        )}
      </div>

      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3 min-h-96">
        <h1 className="text-center text-lg pb-8">Quick Links</h1>
        {first === 0 && (
          <div className="grid place-items-center py-20">
            <LinkIcon className="h-20 w-20 text-myColors-600" />
            <div className=" text-sm text-gray-500 pt-2">No quick links</div>
          </div>
        )}
        {first === 1 && (
          <div className="flex-col space-y-2">
            <div className=" bg-myColors-300 px-4 p-3 rounded-2xl">
              <div className="text-sm text-myColors-600">
                Fantasy Premier League
              </div>
              <div className="text-xs text-gray-400 underline">
                <a target=" blank" href="https://fantasy.premierleague.com/">
                  https://fantasy.premierleague.com
                </a>
              </div>
            </div>
            <div className=" bg-myColors-300 px-4 p-3 rounded-2xl">
              <div className="text-sm text-myColors-600">
                Fantasy Premier League
              </div>
              <div className="text-xs text-gray-400 underline">
                <a target=" blank" href="https://fantasy.premierleague.com/">
                  https://fantasy.premierleague.com
                </a>
              </div>
            </div>
            <div className=" bg-myColors-300 px-4 p-3 rounded-2xl">
              <div className="text-sm text-myColors-600">
                Fantasy Premier League
              </div>
              <div className="text-xs text-gray-400 underline">
                <a target=" blank" href="https://fantasy.premierleague.com/">
                  https://fantasy.premierleague.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3 min-h-96">
        <h1 className="text-center text-lg pb-8">Upcoming Holidays</h1>
        <div className="flex text-sm">
          <div className="w-1/3 pl-4">Date</div>
          <div className="w-1/3 pl-1">Name</div>
          <div className="w-1/3 pl-4">Type</div>
        </div>
        <div className="w-full h-[1px] bg-white mb-4"></div>
        <div className="flex-col space-y-2">
          {holidays.map(({ date, name, type }) => (
            <div key={date} className="flex-col space-y-2">
              <div className=" text-sm bg-myColors-300 px-4 p-3 rounded-2xl">
                <div>
                  <div className="flex">
                    <div className=" text-myColors-600 w-1/3">
                      {new Date(date).toUTCString().substring(0, 11)}
                    </div>
                    <div className=" text-xs text-gray-300 w-1/3">{name}</div>
                    <div className=" text-xs text-gray-300 w-1/3 pl-6">
                      {type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3 min-h-96">
        <h1 className="text-center text-lg pb-8">My Files</h1>
        {first === 1 && (
          <div className="grid place-items-center py-20">
            <ClipboardIcon className="h-20 w-20 text-myColors-600" />
            <div className=" text-sm text-gray-500 pt-2">No files</div>
          </div>
        )}
      </div>

      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3 min-h-96">
        <h1 className="text-center text-lg pb-8">Wedding Anniversary</h1>
        {first === 0 && (
          <div className="grid place-items-center py-20">
            <CakeIcon className="h-20 w-20 text-myColors-600" />
            <div className=" text-sm text-gray-500 pt-2">
              No wedding anniversaries today
            </div>
          </div>
        )}
        {first === 1 && (
          <div className="flex-col space-y-2">
            {weddings.map(({ _id, name, location, date }) => (
              <div
                key={_id}
                className="flex space-x-4 items-center bg-myColors-300 px-4 p-3 rounded-2xl"
              >
                <div>
                  <UserIcon className="h-8 w-8 rounded-full bg-green-500 p-1" />
                </div>
                <div className="flex-col space-y-1">
                  <div className=" text-myColors-600">{name}</div>
                  <div className="text-sm">
                    {new Date(date).toUTCString().substring(0, 22)}
                  </div>
                  <div className=" text-xs text-gray-400">
                    <b className="text-gray-300">Location:<br></br></b> {location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeContent;
