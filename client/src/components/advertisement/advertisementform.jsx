import React, { useContext, useState } from "react";
import axios from "axios";

import "./advertisementform.scss";
import ImageUpload from "./ImageUpload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const AdvertisementForm = () => {
  const { currentUser } = useContext(AuthContext);
  const [ads_image, setads_image] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);

  const user_id = currentUser.user_id;

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("details", details);
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    (newPP) => {
      return makeRequest.post("/ads/addadvertisements", newPP);
    },
    {
      onSuccess: () => {
        //  setTriggerRefetch(true);
      },
    }
  );

  const handleUpdatePP = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    console.log(imgUrl);
     mutation.mutate({ user_id, title, description, details, img: imgUrl });
    //  setOpenUpdatePP(false);
    //  setTitle(null);
    //  setDescription(null);
    //  setDetails(null);
    setFile(null);
  };

  return (
    <div className="modify-advertisement">
      <h2>Add Advertisement</h2>
      {/* <ImageUpload /> */}
      {/* <form className="adv-form" onSubmit={handleSubmit}> */}
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
        <label htmlFor="ad_media">
          <div className="imgContainer">
            {file ? (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            ) : (
              <p>Upload the Image</p>
              // <img className="file" alt="" src={ads_image} />
            )}
            <CloudUploadIcon className="icon" />
          </div>
        </label>
        <input
          type="file"
          id="ad_media"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button className="btn-adv-submit" type="submit" onClick={handleUpdatePP}>
        Publish Request
      </button>
      {/* </form> */}
    </div>
  );
};

export default AdvertisementForm;