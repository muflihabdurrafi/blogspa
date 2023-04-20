import { useState } from "react";

const Modal = ({ closeModal, modalType, cancelModal, user, setData }: any) => {
    const randomId = Math.floor(1000000 + Math.random() * 90000);

    const [idUser, setIdUser] = useState(randomId);
    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [genderUser, setGenderUser] = useState("male");
    const [statusUser, setStatusUser] = useState("active");

    if (modalType == "Edit") {
        setIdUser(user.id);
        setNameUser(user.name);
        setEmailUser(user.email);
        setGenderUser(user.gender);
        setStatusUser(user.status);
    }
    return (
        <div className="w-[100vw] h-[100vw] bg-slate-700/70 fixed flex justify-center">
            <div className="w-[500px] h-[400px] rounded-xl bg-white shadow-xl flex flex-col p-[25px] mt-20">
                <div className="flex justify-end">
                    <button
                        className="bg-transparent border-none text-2xl cursor-pointer"
                        onClick={() => {
                            closeModal(false);
                            cancelModal(false);
                        }}
                    >
                        {" "}
                        X{" "}
                    </button>
                </div>
                {modalType === "Add" && (
                    <>
                        <div className="inline-block text-center mt-[10px] text-sm">
                            <h1 className="font-bold">Add New User</h1>
                        </div>
                        <div className="m-2 flex justify-center items-center  text-[1.7rem] text-center">
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold" htmlFor="user_id">
                                    ID
                                </label>
                                <input className="border text-center" type="text" name="user_id" autoComplete="off" defaultValue={idUser} disabled />
                                <label className="font-semibold" htmlFor="name">
                                    Name
                                </label>
                                <input className="border text-center" type="text" name="name" autoComplete="off" onChange={(e) => setNameUser(e.target.value)} />
                                <label className="font-semibold" htmlFor="email">
                                    Email
                                </label>
                                <input className="border text-center" type="email" name="email" autoComplete="off" onChange={(e) => setEmailUser(e.target.value)} />
                                <label className="font-semibold" htmlFor="gender">
                                    Gender
                                </label>
                                <select className="text-center border" name="gender" onChange={(e) => setGenderUser(e.target.value)}>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                <label className="font-semibold" htmlFor="status">
                                    Status
                                </label>
                                <select className="text-center border" name="status" onChange={(e) => setStatusUser(e.target.value)}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                className="px-4 py-2 m-[10px] border-none bg-red-600 text-white rounded-lg text-sm cursor-pointer"
                                onClick={() => {
                                    closeModal(false);
                                    cancelModal(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    closeModal(false);
                                    cancelModal(false);
                                    setData({
                                        id: idUser,
                                        name: nameUser,
                                        email: emailUser,
                                        gender: genderUser,
                                        status: statusUser,
                                    });
                                }}
                                className="px-4 py-2 m-[10px] border-none bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
                            >
                                Continue
                            </button>
                        </div>
                    </>
                )}
                {modalType === "Edit" && (
                    <>
                        <div className="inline-block text-center mt-[10px] text-sm">
                            <h1 className="font-bold">Edit User</h1>
                        </div>
                        <div className="flex-[50%] flex justify-center items-center  text-[1.7rem] text-center">
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold" htmlFor="user_id">
                                    ID
                                </label>
                                <input className="border text-center" type="text" name="user_id" autoComplete="off" defaultValue={user.id} disabled />
                                <label className="font-semibold" htmlFor="name">
                                    Name
                                </label>
                                <input className="border text-center" type="text" name="name" autoComplete="off" defaultValue={user.name} onChange={(e) => setNameUser(e.target.value)} />
                                <label className="font-semibold" htmlFor="email">
                                    Email
                                </label>
                                <input className="border text-center" type="email" name="email" autoComplete="off" defaultValue={user.email} onChange={(e) => setEmailUser(e.target.value)} />
                                <label className="font-semibold" htmlFor="gender">
                                    Gender
                                </label>
                                <select className="text-center border" name="gender" defaultValue={user.gender} onChange={(e) => setGenderUser(e.target.value)}>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                <label className="font-semibold" htmlFor="status">
                                    Status
                                </label>
                                <select className="text-center border" name="status" defaultValue={user.status} onChange={(e) => setStatusUser(e.target.value)}>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                className="px-4 py-2 m-[10px] border-none bg-red-600 text-white rounded-lg text-sm cursor-pointer"
                                onClick={() => {
                                    closeModal(false);
                                    cancelModal(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    closeModal(false);
                                    cancelModal(false);
                                    setData({
                                        id: idUser,
                                        name: nameUser,
                                        email: emailUser,
                                        gender: genderUser,
                                        status: statusUser,
                                    });
                                }}
                                className="px-4 py-2 m-[10px] border-none bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
                            >
                                Continue
                            </button>
                        </div>
                    </>
                )}
                {modalType === "Delete" && (
                    <>
                        <div className="inline-block text-center mt-[10px] text-sm">
                            <h1 className="font-bold">Delete User</h1>
                        </div>
                        <div className="flex-[50%] flex justify-center items-center  text-base text-center">Are you sure you want to delete user ID {user.id}?</div>
                        <div className="flex justify-center items-center">
                            <button
                                className="px-4 py-2 m-[10px] border-none bg-red-600 text-white rounded-lg text-sm cursor-pointer"
                                onClick={() => {
                                    closeModal(false);
                                    cancelModal(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setData(user.id);
                                    closeModal(false);
                                }}
                                className="px-4 py-2 m-[10px] border-none bg-blue-400 text-white rounded-lg text-sm cursor-pointer"
                            >
                                Yes
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
