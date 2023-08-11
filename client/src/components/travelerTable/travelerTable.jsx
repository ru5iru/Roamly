import './travelerTable.scss';

function TravelerTable() {
  return(
    <div className="table">
        <div className="user_table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th className='icon'>Profile</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>JohnT</td>
                    <td>JhonT@gmail.com</td>
                    <td className='icon'>
                        <span class="material-icons">
                            visibility
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default TravelerTable;