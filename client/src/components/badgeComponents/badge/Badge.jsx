import "./badge.scss"

const Badge = ({ badge }) => {
  return (
    <div className="badge-container bg-soft-blue margin-10">
        <div className={`badge-circle ${badge.badge_color}`}>
            <div className="circle-content white">
                <img className="badge-img" src={badge.badge_img} alt={badge.badge_name}/>
            </div>
        </div>
    </div>
  )
}

export default Badge