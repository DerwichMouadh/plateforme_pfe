import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import KanbanContent from "../../../components/KanbanContent";
import RightSidebar from "../../../components/RightSidebar";
import RhService from "../../../services/RhService";
import axios from "axios";
import UserRow from "../../../components/UserRow";

function TeamMembers({ _id }) {
  const router = useRouter();
  const { id } = router.query;
  let filtredTeams = [];
  const [name, setName] = useState("");
  const [teamLeader, setTeamLeader] = useState({});

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/sections/${id}`,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setTeams(data.data.employees);
          setName(data.data.name);
          setTeamLeader(data.data.teamLeader);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };
  return (
    <div className="flex">
      <Head>
        <title>PFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Sidebar />
      <div className="bg-myColors-100 h-screen w-7/12 relative">
        <Navbar navBarTitle_1="Teams" navBarTitle_2={name} />
        <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
          <div className="px-8 absolute top-[0px] pt-6 left-0 right-0 rounded-2xl bg-myColors-200">
            <div className="flex text-white">
              <h4 className="w-1/12"></h4>
              <h4 className="w-4/12">Name</h4>
              <h4 className="w-3/12">Designation</h4>
              <h4 className="w-2/12"></h4>
              <h4 className="w-2/12 pl-6">Actions</h4>
            </div>
            <div className="h-[1px] w-full bg-white"></div>
          </div>
          <div className="pt-8">
            <UserRow
              id={teamLeader._id}
              key={teamLeader._id}
              number="1"
              firstname={teamLeader.firstname}
              lastname={teamLeader.lastname}
              location={teamLeader.location}
              designation={teamLeader.designation}
              date_of_birth={teamLeader.date_of_birth}
              email={teamLeader.email}
              gender={teamLeader.gender}
              _id={teamLeader._id}
              image={teamLeader.image}
              role={teamLeader.role}
            />
            <div className="flex-col space-y-2 pt-2">
              {teams?.map(
                (
                  {
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
                    image,
                  },
                  i
                ) => (
                  <div key={_id}>
                    <UserRow
                      id={_id}
                      getAll={getAll}
                      key={_id}
                      number={i + 2}
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
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}

export default TeamMembers;