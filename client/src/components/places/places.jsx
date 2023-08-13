import './places.scss';
import Trip from '../trip/trip';

function Places() {
    return(
        <div className="place_main">
            <div className="places">
                <h1>Places</h1>
                <div className="trips">
                    <Trip />
                </div>
            </div>
        </div>
    );
}

export default Places;