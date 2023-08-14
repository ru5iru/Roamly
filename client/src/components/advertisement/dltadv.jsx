import React, { useState } from "react";
import "./dltadv.scss";

export const DeleteAdvertisement = ({advertisement}) => {  

  return (
    <div className="delete-confirmation">
        <p className="delete-warning">Are you sure you want to delete this advertisement?</p>
            <div className="delete-buttons">
              <button className="delete-confirm">Delete</button>
              <button className="delete-cancel">Cancel</button>
            </div>
    </div>
  )
}

export default DeleteAdvertisement;