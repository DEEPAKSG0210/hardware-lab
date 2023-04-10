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
    const [equipmentName, setEquipmentName] = useState([]);
    const [available, setAvailable] = useState([]);
    const [qty, setQty] = useState("");
    const [barcode, setBarcode] = useState("");
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const userId = localStorage.getItem("student");
    const fetchData = async () => {
        const response = axios
            .get("http://localhost:3002/api/student" + userId)
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

    const fetchItemDetails = async () => {
        console.log(barcode)
        const response = axios
            .get(`http://localhost:3002/api/equipment/id/${barcode}`)
            .then((response) => {
                console.log(response.data);
                const arr = response.data;
                setEquipmentName([...equipmentName, arr.name])
                setAvailable([...available, arr.available])
                setCategory([...category, arr.category])
                
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        setBarcode(e.target.value);
    };

    return (
        <div className="flex flex-col w-screen" >
            <div className="w-full bg-blue-500 p-8 text-white flex flex-row items-center justify-center relative">
                <img src="/psglogo.png" alt="logo" className="h-16 absolute top-4 left-4" />
                <p className="text-xl font-semibold">Hardware Laboratory</p>
            </div>

            <div className="flex flex-row space-x-4 pt-16 pl-24">
                <p className="font-semibold">Roll No:</p>
                <p>{localStorage.getItem("userId")}</p>
            </div>

            <div className="flex flex-row space-x-4 pt-4 pl-24">
                <p className="font-semibold">Name:</p>
                <p>{localStorage.getItem("name")}</p>
            </div>

            <p className="mt-8 ml-24 font-semibold">Barcode</p>
            <div className="flex flex-row space-x-4 pt-4 pl-24">
                <input type="text" className="border-2 border-gray-300 p-2 w-1/4" placeholder="Eg: 22432551" value={barcode} onChange={handleChange} />
                <button className="bg-blue-500 p-2 text-white rounded-lg w-1/5"
                    onClick={() => {
                        fetchItemDetails();
                    }}
                >Fetch Details</button>
            </div>

            <div className="flex flex-row space-x-8 pt-4 pl-24">
                <div className="flex flex-col">
                    <p className="font-semibold">Equipment Name</p>
                    {
                        equipmentName.map((item, index) => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold">Category</p>
                    {
                        category.map((item, index) => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold">Available</p>
                    {
                        available.map((item, index) => {
                            return (
                                <p className="text-center">{item}</p>
                            )
                        })
                    }
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
