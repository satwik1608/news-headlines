import React, { Component } from "react";
import { register } from "./../services/userService";
import auth from "../services/authService";
import "../rumble.css";
class registerForm extends Component {
  state = {
    data: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      about: "",
      anime: "",
      country: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const response = await register(this.state.data);
    auth.loginWithJwt(response.headers["x-auth-token"]);
    window.location = "./";
  };

  handleChange = (e) => {
    const data = { ...this.state.data };

    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    // return (
    //   <div className="rumble">
    //     <div>
    //       <form
    //         onSubmit={this.handleSubmit}
    //         className=" bg-white shadow-md rounded mt-5 px-8 pt-5 pb-5 mb-5"
    //       >
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="username"
    //           >
    //             Username
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-12000 py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             value={this.state.data.username}
    //             type="username"
    //             name="username"
    //             id="username"
    //             onChange={this.handleChange}
    //             placeholder="Eren"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="email"
    //           >
    //             Email
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             value={this.state.data.email}
    //             type="email"
    //             name="email"
    //             id="email"
    //             onChange={this.handleChange}
    //             placeholder="abc@xyz.com"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="about"
    //           >
    //             Tell Something about yourself
    //           </label>
    //           <textarea
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             value={this.state.data.about}
    //             type="string"
    //             row="10"
    //             name="about"
    //             id="about"
    //             onChange={this.handleChange}
    //             placeholder="I love anime and my favourite character is Mikasa"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="anime"
    //           >
    //             Favourite Anime
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             value={this.state.data.anime}
    //             type="text"
    //             name="anime"
    //             id="anime"
    //             onChange={this.handleChange}
    //             placeholder="AOT"
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="password"
    //           >
    //             Password
    //           </label>
    //           <input
    //             className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //             value={this.state.data.password}
    //             name="password"
    //             type="password"
    //             id="password"
    //             onChange={this.handleChange}
    //             placeholder="******************"
    //           />
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    //             Sign In
    //           </button>
    //         </div>
    //       </form>
    //       <p className="text-center text-gray-500 text-xs">
    //         &copy;2022 Tokyo Corp. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // );

    return (
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                We want to know about you better.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={this.handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        onChange={this.handleChange}
                        id="lastname"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                        id="password"
                        autoComplete="password"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nationality
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="country"
                        id="country"
                        autoComplete="country"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        About
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        name="about"
                        id="about"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="anime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Favourite Anime
                      </label>
                      <input
                        type="text"
                        name="anime"
                        id="anime"
                        onChange={this.handleChange}
                        autoComplete="AOT"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default registerForm;
