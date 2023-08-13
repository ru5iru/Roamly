import './adminTable.scss';
import { Link } from 'react-router-dom';

function AdminTable() {
  return(
    <div className="table">
        <div className="user_table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Contact No</th>
                    <th className='icon'>Profile</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>0712233435</td>
                    <td className='icon'>
                        <Link to='/userprofile' className='link'>
                            <span class="material-icons">
                                visibility
                            </span>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>Jonny Doran</td>
                    <td>0712233435</td>
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

export default AdminTable;