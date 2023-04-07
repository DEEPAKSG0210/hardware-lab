import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/homepage.jpg";
import { toast } from "react-hot-toast";
import TextInput from "./Input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/psglogo.png";
import { fetchStaffLogin } from "../API/calls";

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
   

    const handleClick = (e) => {
        const postbody = { userId: id, password: password };
        // console.log(id);
        // console.log(password);
        fetchStaffLogin(postbody)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("id", res.data.userId);
                    console.log(res.data.token);
                    console.log(res.data.userId);
                    toast.success("Login Successful");
                    navigate("/student-login");
                } else {
                    toast.error("Login Failed");
                }
            })
            .catch((err) => {
                toast.error("Login Failed");
            });
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
                        <div className="text-4xl font-bold mb-4">Login</div>
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
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-bold bg-blue-500 text-black py-1.5 px-6 mt-16 rounded-lg hover:bg-black hover:text-white">
                            <button className=" text-lg" onClick={e => handleClick(e)} >
                                Login
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <p className="text-xs">
                                <Link to="/signup">
                                    Not have an Account ? {"  "}
                                    <span className="text-dark underline">Sign Up</span>
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

export default Login;


