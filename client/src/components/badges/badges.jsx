import './badges.scss';

function Badges() {
    return(
        <div className="badge_main">
            <div className="badges">
                <h2>Traveler Badges</h2>
                <div className="badgerow">
                    <div className="badge">
                        <span class="material-icons new">
                            grade
                        </span>
                        <h3>New Comer</h3>
                        <p>First Ever Trip</p>
                    </div>
                    <div className="badge">
                        <span class="material-icons l1">
                            grade
                        </span>
                        <h3>Level 1 Traveler</h3>
                        <p>Above 10 Trips</p>
                    </div>
                    <div className="badge">
                        <span class="material-icons l2">
                            grade
                        </span>
                        <h3>Level 2 Traveler</h3>
                        <p>Above 50 Trips</p>
                    </div>
                    <div className="badge">
                        <span class="material-icons l3">
                            grade
                        </span>
                        <h3>Level 3 Traveler</h3>
                        <p>Above 100 Trips</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Badges;