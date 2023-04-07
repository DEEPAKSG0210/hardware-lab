import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/homepage.jpg";
import { toast } from "react-hot-toast";
import TextInput from "./Input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/psglogo.png";
import axios from "axios";
import { fetchStaffSignup } from "../API/calls";

const Signup = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confpwd, setConfPwd] = useState("");

    const handleClick = () => {
        if (password != confpwd) {
            toast.error("Password do not match");
            return;
        }
        if (password.includes(" ")) {
            toast.error("Password cannot contain spaces");
            return;
        }
        if (id.includes(" ")) {
            toast.error("Username cannot contain spaces");
            return;
        }
        if (password.length < 8) {
            toast.error("Password must be atleast 8 characters long");
            return;
        }
        if (password.length > 20) {
            toast.error("Password cannot be more than 20 characters long");
            return;
        }
        // password must contain 1 special character
        if (!password.match(/[^a-zA-Z0-9]/)) {
            toast.error("Password must contain atleast 1 special character");
            return;
        }
        // password must contain 1 number
        if (!password.match(/[0-9]/)) {
            toast.error("Password must contain atleast 1 number");
            return;
        }
        console.log(
            { userId: id, password: password }
        )
        toast.promise(
            fetchStaffSignup({
                userId: id,
                password: password,
            }),
            {
                loading: "Registering...",
                success: (res) => {
                    return "Registered Successfully";
                },
                error: (err) => {
                    console.log(err.response.data.error);
                    return `Error: ${err.response.data.error}`;
                },
            }
        );

        navigate("/");
    };

    return (
        <div className="" >
            <div className="flex w-screen overflow-hidden h-screen font-lato font-bold" >
                <div className="w-[40%] flex-1 bg-white justify-center items-center" >
                    <button className="h-16 px-2 mt-2">
                        <Link to="/">
                            <img className="h-full w-auto" src={logo} alt="" />
                        </Link>
                    </button>
                    <div className="flex flex-col h-[calc(100vh-9rem)] justify-center items-center ">
                        <div className="text-4xl font-bold mb-4">Signup</div>
                        <div className="flex flex-col justify-start items-start w-1/2">
                            <div
                                className={`w-full flex flex-col items-start justify-center`}
                            >
                                <TextInput
                                    className="mt-8"
                                    valueState={[id, setId]}
                                    placeholder="Enter Id Number"
                                    title="Identification Number"
                                />
                                <TextInput
                                    className="mt-8"
                                    valueState={[password, setPassword]}
                                    placeholder="Enter Password"
                                    title="Password"
                                    type="password"
                                />
                                <TextInput
                                    className="mt-8"
                                    valueState={[confpwd, setConfPwd]}
                                    placeholder="Confirm Password"
                                    title="Re-Enter password"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-bold bg-blue-500 text-black py-1.5 px-6 mt-16 rounded-lg hover:bg-black hover:text-white">
                            <button className=" text-lg " onClick={handleClick} >
                                Signup
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <p className="text-xs">
                                <Link to="/login">
                                    Already Registered ? {"  "}
                                    <span className="text-dark underline">Login</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[60%] flex-1.5 bg-smoke rounded-[36px] m-3"
                    style={{
                        backgroundImage: `url(${home})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Signup;


