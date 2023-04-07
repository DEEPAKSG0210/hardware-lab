import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import TextInput from "./Input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/psglogo.png";
import axios from "axios";

function Home() {
    const [roll, setRoll] = useState("");
    const [name, setName] = useState("");
    const [Id, setId] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [nfc, setNfc] = useState("");
    const [available, setAvailable] = useState("");
    const [qty, setQty] = useState("");
    const navigate = useNavigate();
    const userId = localStorage.getItem("student");
    const fetchData = async () => {
        const response = axios
            .get("https://localhost:3002/api/student" + userId)
            .then((response) => {
                console.log(response.data);
                const arr = response.data[0]
                setRoll(arr.userId)
                setName(arr.name)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-screen" >
            <div className="w-full bg-blue-500 p-8 text-white flex flex-row items-center justify-center relative">
                <img src="/psglogo.png" alt="logo" className="h-16 absolute top-4 left-4" />
                <p className="text-xl font-semibold">Hardware Laboratory</p>
            </div>

            <div className="flex flex-row space-x-4 pt-16 pl-24">
                <p className="font-semibold">Roll No.:</p>
                <p>{localStorage.getItem("userId")}</p>
            </div>

            <div className="flex flex-row space-x-4 pt-4 pl-24">
                <p className="font-semibold">Name:</p>
                <p>{localStorage.getItem("name")}</p>
            </div>

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

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="p-4 w-1/5 text-center">

                    </p>
                </div>
                <div className="flex flex-row border-b-2 border-b-black w-full justify-between">
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="p-4 w-1/5 text-center">

                    </p>
                </div>
                <div className="flex flex-row border-b-2 border-b-black w-full justify-between">
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">
                        
                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="border-r-2 border-r-black p-4 w-1/5 text-center">

                    </p>
                    <p className="p-4 w-1/5 text-center">

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
