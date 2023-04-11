import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/psglogo.png";
import axios from "axios";

const Table = ({ barcode, name, available, category }) => {
    return (
        <div className="flex flex-row">
            <div className="flex-grow-0 w-1/4 p-2">{barcode}</div>
            <div className="flex-grow-0 w-1/4 p-2">{name}</div>
            <div className="flex-grow-0 w-1/4 p-2">{available}</div>
            <div className="flex-grow-0 w-1/4 p-2">{category}</div>
        </div>
    )
}
const View = () => {
    const [equipment, setEquipment] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3002/api/equipment")
            .then((res) => {
                console.log(res.data);
                setEquipment(res.data);
            })

    }, [setEquipment]);
    // console.log(equipment);
    return (
        <div className="flex flex-col w-screen" >
            <div className="w-full bg-blue-500 p-8 text-white flex flex-row items-center justify-center relative">
                <img src="/psglogo.png" alt="logo" className="h-16 absolute top-4 left-4" />
                <p className="text-xl font-semibold">Hardware Laboratory</p>
            </div>
            <div className="p-5">
                <div className="flex flex-row border-b-2 font-bold">
                    <div className="flex-grow-0 w-1/4 p-2">Barcode</div>
                    <div className="flex-grow-0 w-1/4 p-2">EquipmentName</div>
                    <div className="flex-grow-0 w-1/4 p-2">Available</div>
                    <div className="flex-grow-0 w-1/4 p-2">Category</div>
                </div>
                {equipment.map((equip) => {
                    return (
                        <Table
                            barcode={equip.nfc_no}
                            name={equip.name}
                            available={equip.available}
                            category={equip.category}
                        />
                    );
                })}
            </div>
            <div className="flex items-center justify-center mt-0 px-10 p-8 ml-auto">
            <div className="flex items-corner justify-left text-bold bg-blue-500 text-black py-1.5 p-2 ml-8 px-6 mt-16 rounded-lg hover:bg-black hover:text-white">
                    <Link to="/">
                        <button className=" text-lg " >
                            Dues
                        </button>
                    </Link>
                </div>
                <div className="flex items-corner justify-right text-bold bg-blue-500 text-black py-1.5 px-6 mt-16 ml-8 rounded-lg hover:bg-black hover:text-white">
                    <Link to="/student-login">
                        <button className=" text-lg" >
                            Return
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default View;