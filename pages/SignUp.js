import React, { useState, useEffect } from "react";
import Image from "next/image";
import bg from "../images/bg.jpg";
import authService from "../services/authService";
import route from "next/router";

function SignUp() {
  const [data, setData] = useState({});
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstname", data.firstname);
    form.append("lastname", data.lastname);
    form.append("email", data.email);
    form.append("password", data.password);
    //form.append("designation", data.designation);
    form.append("location", data.location);
    form.append("date_of_birth", data.date_of_birth);
    //form.append("gender", data.gender);

    route.push("/");
    authService.register(form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  function pass() {
    onInputChange;
    onChangeHandler;
  }

  return (
    <div className="grid place-items-center h-screen w-screen relative scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="text-white z-50 absolute right-10 top-10"></div>
      <Image
        alt=""
        src={bg}
        priority
        layout="fill"
        className=" object-cover object-bottom"
      />
      <div className=" backdrop-blur-sm bg-white/10 text-white z-50 rounded-3xl shadow-[rgba(0,0,0,0.8)] shadow-xl">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <p className="mt-2 text-center text-sm font-medium text-myColors-600">
                Welcome
              </p>
              <h2 className="mt-2 text-center text-3xl font-extrabold text-white font-fancy">
                Sign Up!
              </h2>
            </div>
            <div className="w-[1000px]">
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="mt-5 md:mt-0 md:col-span-3">
                    <form action="#" method="POST" onSubmit={onSubmitHandler}>
                      <div className="overflow-hidden rounded-xl">
                        <div className="px-4 py-5 bg-transparent sm:p-6">
                          <div className="grid grid-cols-8 gap-6">
                            <div className="col-span-6 sm:col-span-2">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                name="firstname"
                                onChange={onChangeHandler}
                                id="first-name"
                                autoComplete="given-name"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-2">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                name="lastname"
                                onChange={onChangeHandler}
                                id="last-name"
                                autoComplete="family-name"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email"
                                onChange={onChangeHandler}
                                id="email-address"
                                autoComplete="email"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                onChange={onChangeHandler}
                                // value={input.password}
                                // onChange={pass}
                                // onBlur={validateInput}
                                id="password"
                                placeholder="Enter Password"
                                autoComplete="password"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                              {error.password && (
                                <span className="text-red-500 text-sm">
                                  {error.password}
                                </span>
                              )}
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Confirm password
                              </label>
                              <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter Confirm Password"
                                onChange={onChangeHandler}
                                // value={input.confirmPassword}
                                // onChange={pass}
                                // onBlur={validateInput}
                                id="confirmPassword"
                                autoComplete="password"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                              {error.confirmPassword && (
                                <span className="text-red-500 text-sm">
                                  {error.confirmPassword}
                                </span>
                              )}
                            </div>

                            <div className="col-span-6 sm:col-span-2">
                              <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Designation
                              </label>
                              <select
                                id="designation"
                                name="designation"
                                //onChange={onChangeHandler}
                                autoComplete="country-name"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              >
                                <option className="text-gray-500 bg-gray-300">
                                  Front End Developer
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  Back End Developer
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  Software Architect
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  UI/UX Designer
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  Project Manager
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  QA Engineer
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  Business Analyst
                                </option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Location
                              </label>
                              <input
                                type="text"
                                name="location"
                                onChange={onChangeHandler}
                                id="city"
                                autoComplete="address-level2"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label
                                htmlFor="region"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Date of birth
                              </label>
                              <input
                                type="date"
                                name="date_of_birth"
                                onChange={onChangeHandler}
                                id="region"
                                autoComplete="address-level1"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-2">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-200 pl-4"
                              >
                                Gender
                              </label>
                              <select
                                id="country"
                                name="gender"
                                //onChange={onChangeHandler}
                                autoComplete="country-name"
                                className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-4 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm mt-1"
                              >
                                <option className="text-gray-500 bg-gray-300">
                                  Male
                                </option>
                                <option className="text-gray-500 bg-gray-300">
                                  Female
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-transparent text-center sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
