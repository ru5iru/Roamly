function ServiceTable() {
  return(
    <div className="table">
        <div className="user_table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Email</th>
                    <th className='icon'>Profile</th>
                </tr>
                <tr>
                    <td>Gills Cafe</td>
                    <td>Cafe</td>
                    <td>JhonT@gmail.com</td>
                    <td className='icon'>
                        <span class="material-icons">
                            visibility
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Ocean Waves</td>
                    <td>Shop</td>
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

export default ServiceTable;