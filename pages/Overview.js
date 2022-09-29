import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import { requirePageAuth } from "../utils/auth";

function Overview({id}) {
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

      <Sidebar id={id} />
      <div className=" bg-myColors-100 h-screen w-7/12 relative">
        <Navbar navBarTitle_1="Overview" navBarTitle_2="" id={id} />
        <HomeContent />
      </div>
      <RightSidebar />
    </div>
  );
}

export const getServerSideProps = requirePageAuth;

export default Overview;
