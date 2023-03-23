import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import TextInput from "./Input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/psglogo.png";

function Home() {
    const [roll, setRoll] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-screen" >
            <div className="w-full bg-blue-500 p-8 text-white flex flex-row items-center justify-center relative">
                <img src="/psglogo.png" alt="logo" className="h-16 absolute top-4 left-4" />
                <p className="text-xl font-semibold">Hardware Laboratory</p>
            </div>
            <TextInput
                className="mt-8 w-1/4 px-24"
                valueState={[roll, setRoll]}
                placeholder="Enter Roll Number"
                title="Roll Number"
            />
            <TextInput
                className="mt-8 w-1/4 px-24"
                valueState={[name, setName]}
                placeholder="Enter Name"
                title="Name"
            />

            <div className="flex flex-col justify-center items-center mt-8 border-2 border-black w-3/4 mx-24">
                <div className="flex flex-row border-b-2 border-b-black w-full justify-between font-semibold">
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        ID
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        Equipment Name
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        Barcode
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        Available
                    </p>
                    <p className="p-4 w-1/5 text-center">
                        Quantity
                    </p>
                </div>

                <div className="flex flex-row border-b-2 border-b-black w-full justify-between">
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        1
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        2
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        3
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        4
                    </p>
                    <p className="p-4 w-1/5 text-center">
                        5
                    </p>
                </div>
                <div className="flex flex-row border-b-2 border-b-black w-full justify-between">
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        1
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        2
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        3
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        4
                    </p>
                    <p className="p-4 w-1/5 text-center">
                        5
                    </p>
                </div>
                <div className="flex flex-row border-b-2 border-b-black w-full justify-between">
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        1
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        2
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        3
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        4
                    </p>
                    <p className="p-4 w-1/5 text-center">
                        5
                    </p>
                </div>
            </div>

            <div className="w-3/4 flex justify-end mt-8">
                <button className="w-1/6 bg-blue-500 p-2 text-white rounded-lg"
                onClick={() => navigate("/student-login")}
                >Checkout</button>
            </div>
        </div>
    );

};

export default Home;
