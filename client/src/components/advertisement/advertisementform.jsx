import React, { useState } from "react";
import axios from "axios";

import "./advertisementform.scss";

const AdvertisementForm = () => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null); // State to hold the selected image file


  const handleSubmit = (event) => {
    event.preventDefault();
    // Send advertisement data to the back-end for adding/updating
    const newAdvertisement = { title, description, details, image };
    axios
      .post("http://localhost:8000/server/ads/advertisements", newAdvertisement)

      .then((response) => {

        console.log("Advertisement added successfully:", response.data);
        // Clear the form fields after successful submission
        setTitle("");
        setDescription("");
        setDetails("");
        setImage(null);
      })
      .catch((error) => {
        console.error("Error adding advertisement:", error);
      });
  };

  return (
    <div className="modify-advertisement">
      <h2>Add Advertisement</h2>
      <form className="adv-form" onSubmit={handleSubmit}>
        <div className="adv-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            maxLength="35"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="12"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*" // Allow only image files
            onChange={(e) => setImage(e.target.files[0])} // Update the selected image
          />
        </div>
        <button className="btn-adv-submit" type="submit">
          Add Advertisement
        </button>
      </form>
    </div>
  );
};

export default AdvertisementForm;



// import React, { useState } from "react";
// import axios from "axios";

// import "./advertisementform.scss";

// const AdvertisementForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [details, setDetails] = useState("");
//   const [ad_image, setAdMedia] = useState(null);

//   // const handleAdMediaChange = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.readAsDataURL(file);
//   //     reader.onloadend = () => {
//   //       // Store the base64 encoded string of the file in the state
//   //       setAdMedia(reader.result);
//   //     };
//   //   }
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Send advertisement data to the back-end for adding/updating
//     const newAdvertisement = { title, description, details, ad_image };
//     axios
//       .post("http://localhost:8000/server/ads/advertisements", newAdvertisement)

//       .then((response) => {
//         console.log("Advertisement added successfully:", response.data);
//         // Clear the form fields after successful submission
//         setTitle("");
//         setDescription("");
//         setDetails("");
//         setAdMedia(null);
//       })
//       .catch((error) => {
//         console.error("Error adding advertisement:", error);
//       });
//   };

//   return (
//     <div className="modify-advertisement">
//       <h2>Add Advertisement</h2>
//       <form className="adv-form" onSubmit={handleSubmit}>

//         <div className="adv-field">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             maxLength="35"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             rows="12"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="details">Details:</label>
//           <textarea
//             id="details"
//             rows="5"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           />
//         </div>
//         <div>
//          <label htmlFor="ad_image">Image:</label>
//           <input
//             type="file"
//             id="ad_image"
//             accept="image/*"
//             onChange={(e) => setAdMedia(e.target.files[0])}
//           />
//         </div>

//         <button className="btn-adv-submit" type="submit">
//           Add Advertisement
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdvertisementForm;

// import React, { useState } from "react";
// import axios from "axios";

// import "./advertisementform.scss";

// const AdvertisementForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [details, setDetails] = useState("");
//   const [ad_image, setImage] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Create a FormData object to send data, including the image file
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("details", details);
//     formData.append("ad_image", ad_image);

//     // Send advertisement data to the back-end for adding/updating
//     axios
//       .post("http://localhost:8000/server/ads/advertisements", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log("Advertisement added successfully:", response.data);
//         // Clear the form fields after successful submission
//         setTitle("");
//         setDescription("");
//         setDetails("");
//         setImage(null);
//       })
//       .catch((error) => {
//         console.error("Error adding advertisement:", error);
//       });
//   };

//   return (
//     <div className="modify-advertisement">
//       <h2>Add Advertisement</h2>
//       <form className="adv-form" onSubmit={handleSubmit}>
//         <div className="adv-field">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             maxLength="35"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             rows="12"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="details">Details:</label>
//           <textarea
//             id="details"
//             rows="5"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="ad_image">Image:</label>
//           <input
//             type="file"
//             id="ad_image"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>
//         <button className="btn-adv-submit" type="submit">
//           Add Advertisement
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdvertisementForm;

// // import React, { useState } from "react";
// // import axios from "axios";

// // import "./advertisementform.scss";

// // const AdvertisementForm = () => {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [details, setDetails] = useState("");
// //   const [ad_image, setAdMedia] = useState(null); // Change initialization to null

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     // Create a FormData object to send the data including the image
// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("description", description);
// //     formData.append("details", details);
// //     formData.append("ad_image", ad_image);

// //     // Send advertisement data including the image to the backend for adding/updating
// //     axios
// //       .post("http://localhost:8000/server/ads/advertisements", formData)
// //       .then((response) => {
// //         console.log("Advertisement added successfully:", response.data);
// //         // Clear the form fields after successful submission
// //         setTitle("");
// //         setDescription("");
// //         setDetails("");
// //         setAdMedia(null);
// //       })
// //       .catch((error) => {
// //         console.error("Error adding advertisement:", error);
// //       });
// //   };

// //   return (
// //     <div className="modify-advertisement">
// //       <h2>Add Advertisement</h2>
// //       <form className="adv-form" onSubmit={handleSubmit}>

// //         <div className="adv-field">
// //           <label htmlFor="title">Title:</label>
// //           <input
// //             type="text"
// //             id="title"
// //             maxLength="35"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //           />
// //         </div>
// //         <div className="adv-field">
// //           <label htmlFor="description">Description:</label>
// //           <textarea
// //             id="description"
// //             rows="12"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //           />
// //         </div>
// //         <div className="adv-field">
// //           <label htmlFor="details">Details:</label>
// //           <textarea
// //             id="details"
// //             rows="5"
// //             value={details}
// //             onChange={(e) => setDetails(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="ad_image">Image:</label>
// //           <input
// //             type="file"
// //             id="ad_image"
// //             accept="image/jpeg, image/png, image/gif, image/jpg, image/webp"
// //             onChange={(e) => setAdMedia(e.target.files[0])} // Change this line
// //           />
// //         </div>

// //         <button className="btn-adv-submit" type="submit">
// //           Add Advertisement
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AdvertisementForm;

// import React, { useState } from "react";
// import axios from "axios";

// import "./advertisementform.scss";

// const AdvertisementForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [details, setDetails] = useState("");
//   const [ad_image, setAdMedia] = useState(null);

//   // const handleAdMediaChange = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.readAsDataURL(file);
//   //     reader.onloadend = () => {
//   //       // Store the base64 encoded string of the file in the state
//   //       setAdMedia(reader.result);
//   //     };
//   //   }
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Send advertisement data to the back-end for adding/updating
//     const newAdvertisement = { title, description, details, ad_image };
//     axios
//       .post("http://localhost:8000/server/ads/advertisements", newAdvertisement)
//       .then((response) => {
//         console.log("Advertisement added successfully:", response.data);
//         // Clear the form fields after successful submission
//         setTitle("");
//         setDescription("");
//         setDetails("");
//         setAdMedia(null);
//       })
//       .catch((error) => {
//         console.error("Error adding advertisement:", error);
//       });
//   };

//   return (
//     <div className="modify-advertisement">
//       <h2>Add Advertisement</h2>
//       <form className="adv-form" onSubmit={handleSubmit}>

//         <div className="adv-field">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             maxLength="35"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             rows="12"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="details">Details:</label>
//           <textarea
//             id="details"
//             rows="5"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           />
//         </div>
//         <div>
//          <label htmlFor="ad_image">Image:</label>
//           <input
//             type="file"
//             id="ad_image"
//             accept="image/jpeg, image/png, image/gif"
//             onChange={(e) => setAdMedia(e.target.files[0])}
//           />
//         </div>

//         <button className="btn-adv-submit" type="submit">
//           Add Advertisement
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdvertisementForm;

// import React, { useState } from "react";
// import axios from "axios";

// import "./advertisementform.scss";

// const AdvertisementForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [details, setDetails] = useState("");
//   const [ad_image, setImage] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Create a FormData object to send data, including the image file
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("details", details);
//     formData.append("ad_image", ad_image);

//     // Send advertisement data to the back-end for adding/updating
//     axios
//       .post("http://localhost:8000/server/ads/advertisements", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log("Advertisement added successfully:", response.data);
//         // Clear the form fields after successful submission
//         setTitle("");
//         setDescription("");
//         setDetails("");
//         setImage(null);
//       })
//       .catch((error) => {
//         console.error("Error adding advertisement:", error);
//       });
//   };

//   return (
//     <div className="modify-advertisement">
//       <h2>Add Advertisement</h2>
//       <form className="adv-form" onSubmit={handleSubmit}>
//         <div className="adv-field">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             maxLength="35"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             rows="12"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="details">Details:</label>
//           <textarea
//             id="details"
//             rows="5"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           />
//         </div>
//         <div className="adv-field">
//           <label htmlFor="ad_image">Image:</label>
//           <input
//             type="file"
//             id="ad_image"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>
//         <button className="btn-adv-submit" type="submit">
//           Add Advertisement
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdvertisementForm;
