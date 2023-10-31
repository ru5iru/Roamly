import { Link } from 'react-router-dom';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

function ServiceTable() {

    const { data: osData } = useQuery(
        ["osData"],
        async () => {
            const response = await makeRequest.get(`/admin/OsData`);
            return response.data;
        }
    );

  return(
    <div className="table">
        <div className="user_table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th className='icon'>Profile</th>
                </tr>
                {osData && osData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.service_name}</td>
                        <td>{row.type}</td>
                        <td>{row.location}</td>
                        <td className='icon'>
                            <Link to='/userprofile?id=user_id' className='link'>
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

export default ServiceTable;