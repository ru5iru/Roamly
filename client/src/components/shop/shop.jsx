import React from 'react';
import './shop.scss';
import { FaCartShopping } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';

function ShopCard(props) {
  const { photo, name, address, phone } = props;

  return (
    <div className="shop-card">
      <div className="left-section">
        <img src={photo} alt={name} className="shop-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            <FaMapMarkerAlt />
            <span className="address">{address}</span>
          </p>
          <p>
            <BiSolidPhoneCall />
            <span className="phone">{phone}</span>
          </p>
          <p>
            <FaCartShopping />
            <span className="shop">Shop</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Shop() {
  const shops = [
    {
      photo: 'https://media.istockphoto.com/id/1265272573/photo/unrecognizable-supermarket-aisle-as-background.jpg?s=1024x1024&w=is&k=20&c=Jj_rvrl6WEyF4e-Lg_vzVIsQxQChZwJD7nagTyKJjV4=',
      name: 'Dimuthu Grocery',
      address: 'PQ9C+RQW, Colombo - Ratnapura - Wellawaya - Batticaloa Rd, Belihuloya',
      phone: '0717073529',
    },
    {
      photo: 'https://media.istockphoto.com/id/1145600660/photo/a-woman-tourist-at-a-souvenir-fair-choosing-handmade-decorative-woodcarving-gifts.jpg?s=612x612&w=0&k=20&c=8FtIJFSTxNy8NOBFCvswwgBgC5TxVOuhb86raNgfUCs=',
      name: 'Belihuloya Handicrafts',
      address: 'Main Street, Belihuloya',
      phone: '0771234567',
    },
    {
      photo: 'https://media.istockphoto.com/id/487491992/photo/farmers-food-market-stall-with-variety-of-organic-vegetable.jpg?s=612x612&w=0&k=20&c=8LwR_owLOl62mUOb0GElxgNz8hsgtgeSmzBu9OvodkI=',
      name: 'Green Valley Fresh Produce',
      address: 'Ratnapura - Wellawaya - Batticaloa Rd, Belihuloya',
      phone: '0709876543',
    },
    {
      photo: 'https://media.istockphoto.com/id/1308281369/photo/factory-for-the-production-of-bakery-products.jpg?s=612x612&w=0&k=20&c=fk7jQV20yQkZhVXBwE5xteK0aCuOchOKkDpKLR_i_Tk=',
      name: 'Hillside Bakery',
      address: 'Haputale - Belihuloya Rd, Belihuloya',
      phone: '0762345678',
    }
  ];

  return (
    <div>
      {shops.map((shop, index) => (
        <ShopCard
          key={index}
          photo={shop.photo}
          name={shop.name}
          address={shop.address}
          phone={shop.phone}
        />
      ))}
    </div>
  );
}

export default Shop;

// // rsf - React stateless function

// import "./shop.scss";
// import dimuthuStore from "../../assets/images/Dimuthu.png";

// import { FaCartShopping } from "react-icons/fa6";

// import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// const Shop = () => {
//   return (
//     <div className="hotel">
//       {/* <h1>Hotels near Belihuloya</h1> */}
//       <div className="cardd">
//         <div className="left">
//           <img src={dimuthuStore} alt="Tree" />
//         </div>
//         <div className="right">
//           <ul>
//             <li>
//                 <h3>Dimuthu Grocery</h3>
//             </li>
//             <li>
//               <p>
//                 PQ9C+RQW, Colombo - Ratnapura - Wellawaya - Batticaloa Rd,
//                 Belihuloya
//               </p>
//             </li>
//             <li>
//               <LocationOnIcon />
//               <span>Location</span>
//             </li>
//             <li>
//               <PhoneInTalkIcon />
//               <span>0717073529</span>
//             </li>
//             <li>
//               <FaCartShopping />
//               <span>Shop</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
