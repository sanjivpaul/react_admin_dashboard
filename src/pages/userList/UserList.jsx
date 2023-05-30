import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        // filter will check all the data are present and if given id will match with data it will delete it
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: "user",
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="tableUserList">
                        <img src={params.row.avatar} alt="" className="tableUserListImg" />
                        {params.row.username}
                    </div>
                );
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            // by using renderCell we can pass a arrow functions
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListBtnEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListBtnDeleteIcon"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },
    ];


    return (
        <div className="userList" >
            <DataGrid
                // this data is come from useState
                rows={data}
                columns={columns}
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    )
}
