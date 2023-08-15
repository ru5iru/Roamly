import "./trip.scss";

const Trip = () => {
    return (
        <div className="trip_main">
            <div className="row">
                <div className="trip_box">
                    <table>
                        <tr>
                            <th className="tdtype">Trip Type</th>
                            <th className="thact">Action</th>
                            <th>Places</th>
                        </tr>
                        <tr>
                            <td rowSpan={3}>Camping</td>
                            <td rowSpan={3}>
                                <span class="material-icons">
                                    edit
                                </span>
                            </td>
                            <td>Belihuloya Camping</td>
                        </tr>
                        <tr>
                            <td>Mahagala Campsite</td>
                        </tr>
                        <tr>
                            <td>Wewatenna Camping site</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>Surfing</td>
                            <td rowSpan={3}>
                                <span class="material-icons">
                                    edit
                                </span>
                            </td>
                            <td>Belihuloya Camping</td>
                        </tr>
                        <tr>
                            <td>Mahagala Campsite</td>
                        </tr>
                        <tr>
                            <td>Wewatenna Camping site</td>
                        </tr>
                        <tr>
                            <td rowSpan={7}>Beaches</td>
                            <td rowSpan={7}>
                                <span class="material-icons">
                                    edit
                                </span>
                            </td>
                            <td>Unawatuna</td>
                        </tr>
                        <tr>
                            <td>Bentota</td>
                        </tr>
                        <tr>
                            <td>Mirissa</td>
                        </tr>
                        <tr>
                            <td>Dickwella</td>
                        </tr>
                        <tr>
                            <td>Weligama</td>
                        </tr>
                        <tr>
                            <td>Galle</td>
                        </tr>
                        <tr>
                            <td>Induruwa</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Trip;
