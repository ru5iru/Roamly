function GuideTable() {
  return(
    <div className="table">
        <div className="user_table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Based on</th>
                    <th>Email</th>
                    <th className='icon'>Profile</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Yala</td>
                    <td>JhonT@gmail.com</td>
                    <td className='icon'>
                        <span class="material-icons">
                            visibility
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Jonny Doemt</td>
                    <td>Nuwara-eliya</td>
                    <td>JhnnyT@gmail.com</td>
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

export default GuideTable;