import './adminTable.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";  

function AdminTable() {

    const { data: adminsData } = useQuery(
        ["admData"],
        async () => {
            const response = await makeRequest.get(`/admin/useradminD`);
            return response.data;
        }
    );

    return(
        <div className="table">
            <div className="user_table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th className='icon'>Profile</th>
                    </tr>
                    {adminsData && adminsData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.firstname}</td>
                            <td>{row.contact_no}</td>
                            <td className='icon'>
                                <Link to='/userprofile?id=admin_id' className='link'>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default AdminTable;