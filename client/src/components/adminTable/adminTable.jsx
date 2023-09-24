import './adminTable.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
//import Icon from '@mui/material/Icon';

function AdminTable() {

    const { data: adminData} = useQuery(
        ["adminData"],
        async () => {
            const response = await makeRequest.get(`/adminTable/adminData`);
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
                    {adminData && adminData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.firstname && row.lastname}</td>
                            <td>{row.contact_no}</td>
                            <td className='icon'>
                                <Link to='/userprofile' className='link'>
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

export default React.memo(AdminTable);