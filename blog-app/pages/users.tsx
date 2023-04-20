import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

interface UsersProps {
    usersData: User[];
}

const Users = (props: UsersProps) => {
    const { usersData } = props;
    const [datas, setDatas] = useState(usersData);
    const [openModal, setOpenModal] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [id, setId] = useState(0);
    const [search, setSearch] = useState("");

    const addHandler = (userBaru: any) => {
        datas.push(userBaru);
    };
    const editHandler = (editUser: User) => {
        const editedUser = {
            id: editUser.id,
            name: editUser.name,
            email: editUser.email,
            gender: editUser.gender,
            status: editUser.status,
        };
        const index = datas.findIndex((data) => data.id == editedUser.id);
        datas[index] = editedUser;
    };

    const deleteHandler = (id: number) => {
        const filteredData = datas.filter((data) => data.id != id);
        setDatas(filteredData);
    };

    return (
        <Layout pageTitle="Users">
            {openModal && (
                <Modal
                    closeModal={setOpenModal}
                    modalType={(isAdd && "Add") || (isEdit && "Edit") || (isDelete && "Delete")}
                    cancelModal={(isAdd && setIsAdd) || (isEdit && setIsEdit) || (isDelete && setIsDelete)}
                    user={datas.find((user) => user.id === id)}
                    setData={(isAdd && addHandler) || (isEdit && editHandler) || (isDelete && deleteHandler)}
                />
            )}
            <div className="py-20">
                <h1 className="text-center font-bold text-4xl">Users Page</h1>
                <div className="text-center mt-10">
                    {datas.length > 0 ? (
                        <>
                            <button
                                onClick={() => {
                                    setOpenModal(true);
                                    setIsAdd(true);
                                }}
                                className="bg-green-500 hover:bg-green-900 hover:text-white px-3 py-1 rounded-lg"
                            >
                                Add New
                            </button>
                            <input
                                type="text"
                                className="w-[50%] border border-gray-600/50 block m-auto py-1 rounded-lg my-5 text-center shadow-md"
                                placeholder="Search Users by Name"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                            <table className="table-fixed break-words border mx-auto mt-2 md:text-base text-sm md:w-auto w-[90%]">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas
                                        .filter((data) => {
                                            return search.toLowerCase() === "" ? data : data.name.toLowerCase().includes(search);
                                        })
                                        .map((user, i) => {
                                            return (
                                                <tr className="text-center" key={user.id}>
                                                    <td className="border p-2">{i + 1}</td>
                                                    <td className="border p-2">{user.id}</td>
                                                    <td className="border p-2">{user.name}</td>
                                                    <td className="border p-2">{user.email}</td>
                                                    <td className="border p-2">{user.gender}</td>
                                                    <td className="border p-2">{user.status}</td>
                                                    <td className="border p-2 flex flex-col">
                                                        <button
                                                            onClick={() => {
                                                                setOpenModal(true);
                                                                setIsEdit(true);
                                                                setId(user.id);
                                                            }}
                                                            className="bg-sky-500 hover:bg-sky-900 hover:text-white md:px-3 md:py-1 px-2 py-1 rounded-lg"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setOpenModal(true);
                                                                setIsDelete(true);
                                                                setId(user.id);
                                                            }}
                                                            className="bg-red-500 hover:bg-red-900 hover:text-white md:px-3 md:py-1 px-2 py-1 rounded-lg"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        "No Users Found"
                    )}
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users");
    const usersData = await res.json();
    return {
        props: {
            usersData,
        },
    };
};

export default Users;
