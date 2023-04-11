import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import TextInput from "./Input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/psglogo.png";
import axios from "axios";
import Select from "react-select";
import equipments from "../data/EquipmentList";
import { MdDelete } from "react-icons/md";

function Home() {
    const [roll, setRoll] = useState("");
    const [name, setName] = useState("");

    const [inputBarcode, setInputBarcode] = useState("");
    const [inputEquipName, setInputEquipName] = useState("");

    const [equipmentName, setEquipmentName] = useState([]);
    const [available, setAvailable] = useState([]);
    const [qty, setQty] = useState([]);
    const [category, setCategory] = useState([]);
    const [barcode, setBarcode] = useState([]);

    const [borrowed, setBorrowed] = useState(null);
    const [borrowedDetails, setBorrowedDetails] = useState([]);

    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3002/api/student/${userId}`)
            .then((response) => {
                console.log(response.data);
                const arr = response.data;
                setRoll(arr.userId)
                setName(arr.name)
                setBorrowed(arr.borrow)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userId]);

    const curDate = () => {
        var today = new Date();
        const output =
            String(today.getDate()).padStart(2, '0') + "/" +
            String(today.getMonth() + 1).padStart(2, '0') + "/" +
            today.getFullYear() + " - " +
            String(today.getHours()).padStart(2, '0') + ":" +
            String(today.getMinutes()).padStart(2, '0') + ":" +
            String(today.getSeconds()).padStart(2, '0')
        return output
    }

    const fetchItemDetailsBarcode = async () => {
        console.log(inputBarcode)
        axios
            .get(`http://localhost:3002/api/equipment/id/${inputBarcode}`)
            .then((response) => {
                console.log(response.data);
                const arr = response.data;
                if (equipmentName.includes(arr.name)) {
                    toast.error("Item already exists")
                } else {
                    setEquipmentName([...equipmentName, arr.name])
                    setAvailable([...available, arr.available])
                    setCategory([...category, arr.category])
                    setQty([...qty, 1])
                    setBarcode([...barcode, arr.nfc_no])
                }

            })
            .catch((error) => {
                console.error(error);
                toast.error("Barcode Error")
            });
    };

    const fetchItemDetailsName = async () => {
        console.log(inputEquipName)
        axios
            .get(`http://localhost:3002/api/equipment/name/${inputEquipName}`)
            .then((response) => {
                console.log(response.data);
                const arr = response.data;
                if (equipmentName.includes(arr.name)) {
                    toast.error("Item already exists")
                } else {
                    setEquipmentName([...equipmentName, arr.name])
                    setAvailable([...available, arr.available])
                    setCategory([...category, arr.category])
                    setQty([...qty, 1])
                    setBarcode([...barcode, arr.nfc_no])
                }

            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCheckout = async () => {
        let b = [];
        if (borrowed && borrowed.length > 0) {
            b = [...borrowed];
        }

        for (var i = 0; i < barcode.length; i++) {
            b.push([
                barcode[i],
                qty[i],
                curDate(),
                "Not Returned"
            ]);

            axios
                .put("http://localhost:3002/api/equipment/update-quantity/", { id: barcode[i], quantity: available[i] - qty[i] })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.error(error);
                })
        }

        axios
            .put("http://localhost:3002/api/student/borrow/", { roll: localStorage.getItem("userId"), borrow: b })
            .then((res) => {
                console.log(res);
                toast.success("Items added successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleReturn = async (item) => {
        let b = [];
        if (borrowed && borrowed.length > 0) {
            b = [...borrowed];
        }

        for (var i = 0; i < b.length; i++) {
            if (b[i] === item) {
                b[i][3] = "Returned";
                b[i].push(curDate());

                axios
                    .put("http://localhost:3002/api/equipment/update-quantity/", { id: b[i][0], quantity: parseInt(borrowedDetails.find(x => x.nfc_no === item[0])?.available) + b[i][1] })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }

        axios
            .put("http://localhost:3002/api/student/borrow/", { roll: localStorage.getItem("userId"), borrow: b })
            .then((res) => {
                console.log(res);
                toast.success("Updated successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        if (borrowed && borrowed.length > 0) {
            axios
                .post(`http://localhost:3002/api/equipment/barcode-list`, {
                    list: borrowed.map(x => x[0])
                })
                .then((response) => {
                    console.log(response.data);
                    setBorrowedDetails(response.data)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [borrowed]);

    const selectStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: "2px solid #D1D5DB",
            borderRadius: "0.5rem",
            padding: "0.2rem 0.5rem",
        }),
    };

    const handleEquipNameChange = (e) => {
        setInputEquipName(e.value);
    };

    const handleChange = (e) => {
        setInputBarcode(e.target.value);
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

            <div className="flex flex-row gap-x-4 pt-16 pl-24 items-end">
                <div className="flex flex-col space-y-2 w-1/6">
                    <p className="font-semibold">Barcode</p>
                    <input type="text" className="border-2 border-gray-300 p-2 w-full rounded-lg" placeholder="Eg: 22432551" value={inputBarcode} onChange={handleChange} />
                </div>
                <button className="bg-blue-500 p-2 text-white rounded-lg w-1/6 h-12"
                    onClick={() => {
                        fetchItemDetailsBarcode();
                    }}
                >Add Item</button>
                <div className="flex flex-col space-y-2 w-1/6 ml-24">
                    <p className="font-semibold">Name</p>
                    <Select
                        styles={selectStyles}
                        className="z-20 w-full"
                        options={equipments.map((eqp) => {
                            return {
                                value: eqp,
                                label: eqp,
                            };
                        })}
                        onChange={handleEquipNameChange}
                    />
                </div>
                <button className="bg-blue-500 p-2 text-white rounded-lg w-1/6 h-12"
                    onClick={() => {
                        fetchItemDetailsName();
                    }}
                >Add Item</button>
            </div>

            <div className="flex flex-row space-x-8 pt-16 pl-24">
                <div className="flex flex-col w-[5%]">
                    <p className="font-semibold text-xl">S.No.</p>
                    {
                        equipmentName.map((item, index) => {
                            return (
                                <p className="py-4 text-lg">{index + 1}.</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col w-1/4">
                    <p className="font-semibold text-xl">Equipment Name</p>
                    {
                        equipmentName.map((item, index) => {
                            return (
                                <p className="py-4 text-lg">{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col w-1/6">
                    <p className="font-semibold text-xl">Barcode</p>
                    {
                        barcode.map((item, index) => {
                            return (
                                <p className="py-4 text-lg">{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col w-1/6">
                    <p className="font-semibold text-xl">Category</p>
                    {
                        category.map((item, index) => {
                            return (
                                <p className="py-4 text-lg">{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col w-[10%]">
                    <p className="font-semibold text-xl">Available</p>
                    {
                        available.map((item, index) => {
                            return (
                                <p className="py-4 text-lg">{item}</p>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col w-1/6">
                    <p className="font-semibold text-xl">Quantity</p>
                    {
                        qty.map((item, index) => {
                            return (
                                <div className="flex flex-row space-x-4 items-center pt-4 pb-1 ">
                                    <button className="bg-blue-500 p-1 text-white rounded-lg w-1/6 h-10 text-lg"
                                        onClick={() => {
                                            setQty(qty.map((item, i) => {
                                                if (i === index && item > 1) {
                                                    return item - 1;
                                                }
                                                return item;
                                            }
                                            ))
                                        }}
                                    >-</button>
                                    <p className="text-lg w-6 text-center">{item}</p>
                                    <button className="bg-blue-500 p-1 text-white rounded-lg w-1/6 h-10 text-lg"
                                        onClick={() => {
                                            setQty(qty.map((item, i) => {
                                                if (i === index && item < available[index]) {
                                                    return item + 1;
                                                }
                                                return item;
                                            }
                                            ))
                                        }}
                                    >+</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col w-1/6">
                    <p className="font-semibold text-xl">Delete</p>
                    {
                        equipmentName.map((item, index) => {
                            return (
                                <button className="text-black hover:text-red-500 text-2xl pt-6 pb-3 rounded-lg w-fit"
                                    onClick={() => {
                                        setEquipmentName(equipmentName.filter((item, i) => i !== index));
                                        setAvailable(available.filter((item, i) => i !== index));
                                        setCategory(category.filter((item, i) => i !== index));
                                        setQty(qty.filter((item, i) => i !== index));
                                        setBarcode(barcode.filter((item, i) => i !== index));
                                    }}
                                >
                                    <MdDelete />
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <div className="w-full flex justify-end mt-16 pr-32">
                <button className="w-[10%] bg-blue-500 p-2 text-white rounded-lg"
                    onClick={() => { handleCheckout() }}
                >Checkout</button>
            </div>

            {borrowed && borrowed.length > 0 && (
                <div className="flex flex-col space-y-4 pt-16 pl-24">
                    <p className="text-2xl font-bold">Return Items</p>

                    <div className="flex flex-row space-x-8">
                        <div className="flex flex-col w-[5%]">
                            <p className="font-semibold text-xl">S.No.</p>
                            {
                                borrowed.map((item, index) => {
                                    return (
                                        <p className="py-4 text-lg">{index + 1}.</p>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col w-1/5">
                            <p className="font-semibold text-xl">Equipment Name</p>
                            {
                                borrowed.slice(0).reverse().map((item, index) => {
                                    return (
                                        <p className="py-4 text-lg">{borrowedDetails.find(x => x.nfc_no === item[0])?.name}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col w-1/6">
                            <p className="font-semibold text-xl">Barcode</p>
                            {
                                borrowed.slice(0).reverse().map((item, index) => {
                                    return (
                                        <p className="py-4 text-lg">{item[0]}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col w-[10%]">
                            <p className="font-semibold text-xl">Quantity</p>
                            {
                                borrowed.slice(0).reverse().map((item, index) => {
                                    return (
                                        <p className="py-4 text-lg">{item[1]}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col w-1/6">
                            <p className="font-semibold text-xl">Borrowed On</p>
                            {
                                borrowed.slice(0).reverse().map((item, index) => {
                                    return (
                                        <p className="py-4 text-lg">{item[2]}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col w-[10%]">
                            <p className="font-semibold text-xl">Status</p>
                            {
                                borrowed.slice(0).reverse().map((item, index) => {
                                    return (
                                        <p className={`py-4 text-lg font-semibold ${item[3] === "Not Returned" ? "text-red-500" : "text-green-500"}`}>{item[3]}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col w-1/6">
                            <p className="font-semibold text-xl">Return</p>
                            {
                                borrowed.slice(0).reverse().map((item, index) => {
                                    return (
                                        <div>
                                            {
                                                item[3] === "Not Returned" ? (
                                                    <button className="bg-red-500 hover:bg-red-600 font-semibold text-white px-4 py-1 my-4 rounded-lg w-fit h-8"
                                                        onClick={() => {
                                                            handleReturn(item);
                                                        }}
                                                    >
                                                        Return
                                                    </button>
                                                ) : (
                                                    <p className="py-4 text-lg">{item[4]}</p>
                                                )
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )};

        </div>
    );
};
export default Home;
