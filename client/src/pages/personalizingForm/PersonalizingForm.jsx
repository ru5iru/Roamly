import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./personalizingform.scss";

class PersonalizingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "", // Initialize with a default type
      selectedLocation: "",
      selectedTypes: [],
      isOpen: false,
      // name: "",
    };
    this.autocomplete = null;
    this.placesDiv = null; // Added reference to the places div
  }

  componentDidMount() {
    this.loadGoogleMapsAPI();
  }

  loadGoogleMapsAPI = () => {
    if (!window.google) {
      // Load the Google Maps API script only if it hasn't been loaded yet
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhY-F4UuZzLWdgxdFRtsU1kyjJBLB63s8&libraries=places&callback=initMap";
      script.async = true;
      script.defer = true;
      script.onload = this.initMap;
      document.head.appendChild(script);
    } else {
      // If the API is already loaded, just initialize the map
      this.initMap();
    }
  };

  initMap = () => {
    this.autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        types: ["geocode"],
      }
    );

    this.autocomplete.addListener("place_changed", this.searchNearbyPlaces);
  };

  handleTypeChange = (event) => {
    this.setState({ selectedType: event.target.value }, () => {
      this.searchNearbyPlaces();
    });
  };

  handlecheckbox = (event) => {
    const { value } = event.target;

    this.setState((prevState) => {
      if (prevState.selectedTypes.includes(value)) {
        // If the checkbox is already selected, remove it from the selectedTypes array.
        return {
          selectedTypes: prevState.selectedTypes.filter(
            (type) => type !== value
          ),
        };
      } else {
        // If the checkbox is not selected, add it to the selectedTypes array and select both checkboxes.
        return { selectedTypes: [...prevState.selectedTypes, value] };
      }
    });
  };

  n;
  searchNearbyPlaces = () => {
    if (!this.placesDiv) return; // Ensure the div reference exists
    this.placesDiv.innerHTML = ""; // Clear the content of the div
    const place = this.autocomplete.getPlace();

    if (!place || !place.geometry) {
      console.error("Place information is not available.");
      return;
    }

    const selectedLocation = place.name;
    this.setState({ selectedLocation });

    console.log(selectedLocation);

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: place.geometry.location,
      zoom: 15,
    });

    // Perform a nearby search
    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch(
      {
        location: place.geometry.location,
        radius: "10000",
        type: [this.state.selectedType], // Use the selected type from the state
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          if (results.length === 0) {
            console.log("No nearby places found.");
          } else {
            for (let i = 0; i < results.length; i++) {
              this.createMarker(results[i]);
            }
          }
        } else {
          console.error("Nearby search request failed:", status);
        }
      }
    );
  };

  

  handlePhotoClick = (placeId) => {
    // Redirect to the "placedetails" page with the placeId as a route parameter
    window.location.href = `/trip/place/placedetails/${placeId}`;
  };

  createMarker = (place) => {
    console.log("Creating marker for place:", place);

    if (!this.placesDiv) return; // Ensure the div reference exists
    const div = document.createElement("div");
    div.className = "place-item"; // Apply a class for styling

    const name = document.createElement("div");
    name.innerHTML = place.name || "Unnamed Place";
    div.appendChild(name);

    if (place.photos && place.photos.length > 0) {
      const photoUrl = place.photos[0].getUrl();
      const photo = document.createElement("img");
      photo.src = photoUrl;
      photo.width = 300;
      photo.height = 300;
      photo.addEventListener("click", () => {
        this.handlePhotoClick(place.place_id);
      });
      div.appendChild(photo);
    } else {
      const photoUrl = "https://via.placeholder.com/150";
      const photo = document.createElement("img");
      photo.src = photoUrl;
      photo.width = 300;
      photo.height = 300;
      div.appendChild(photo);
    }

    // Add a link to navigate to the "placedetails" page with the placeId as a route parameter
    const link = document.createElement("a");
    link.href = `/trip/place/placedetails/${place.place_id}`;
    link.appendChild(div);

    this.placesDiv.appendChild(link);
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;
    return (
      <section className="personalizing-container">
        <br />
        <br />
        <br />
        <br />
        <div className="title">Tell us your travel preferences...</div>
        <div id="map"></div>
        <div className="row">
          <div className="row-title">
            What is destination of choice?
            <br />
            <input
              type="text"
              id="autocomplete"
              placeholder="Enter Location"
              className="form-input"
              onChange={this.handleTypeChange}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="row-title">
            Select preferred activity
            <br />
          </div>
          <div className="container-rbuttons">
            <div className="radio-tile-group">
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="campground"
                  checked={["campground", "campingsite", "campfire"].includes(
                    this.state.selectedType
                  )}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon bike-icon">
                    <svg
                      fill="#000000"
                      height="1em"
                      viewBox="0 0 576 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7H416L288 288V512H32c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z" />
                    </svg>
                  </div>
                  <label for="bike" className="radio-tile-label">
                    Camping
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="tourist_attraction"
                  checked={this.state.selectedType === "tourist_attraction"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon bike-icon">
                    <svg
                      fill="#000000"
                      height="1em"
                      viewBox="0 0 576 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48 21.5 48 48 48zm-84.3 104.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L505 232.7l-15.3-36.8c-17.2-41.1-57.4-67.9-102-67.9-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l61.7-61.7c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM256 274.1c-7.7-4.4-17.4-1.8-21.9 5.9l-32 55.4-54.4-31.4c-15.3-8.8-34.9-3.6-43.7 11.7L40 426.6c-8.8 15.3-3.6 34.9 11.7 43.7l55.4 32c15.3 8.8 34.9 3.6 43.7-11.7l64-110.9c1.5-2.6 2.6-5.2 3.3-8l43.8-75.7c4.4-7.7 1.8-17.4-5.9-21.9z" />
                    </svg>
                  </div>
                  <label for="bike" className="radio-tile-label">
                    Tourist Attraction
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="art_gallery"
                  checked={this.state.selectedType === "art_gallery"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon car-icon">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 576 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zm236 106.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84c4.5-6.6 12-10.6 20-10.6s15.5 4 20 10.7zM256 128c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-208-8c0-13.3-10.7-24-24-24S0 106.7 0 120v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <label for="drive" className="radio-tile-label">
                    Art Gallery
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="natural_feature"
                  checked={this.state.selectedType === "natural_feature"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon fly-icon">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.18 9" />
                      <path d="M12.436.592c-.533.001-1.073.271-1.432.807L.306 17.553c-.94 1.98.422 3.874 2.269 4.41 3.469.773 6.646-1.292 6.646-1.292 4.68-2.995 7.702-4.685 7.702-4.685 3.73-1.891 6.993.429 7 .434L13.825 1.399c-.331-.54-.856-.808-1.39-.807zm.004 1.66c.42-.002.833.21 1.093.635 2.466 3.66 5.27 7.435 7.629 11.161 0 0-2.252-1.172-5.19.318 0 0-2.38 1.33-6.062 3.687 0 0-2.5 1.624-5.23 1.016-1.453-.422-2.526-1.912-1.786-3.471l8.42-12.711c.282-.421.707-.634 1.126-.635zm8.42 14.165c-4.035.1-7.535 3.87-10.387 4.983 4.335 5.21 17.314-.97 12.454-4.424-.617-.42-1.315-.578-2.067-.56zm-.025 1.016c.545.003 1.04.145 1.457.478 2.288 2.286-6.305 6.262-9.959 3.647 1.182-.091 5.561-4.141 8.502-4.125z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <label for="fly" className="radio-tile-label">
                    Natural Attractions
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="zoo"
                  checked={this.state.selectedType === "zoo"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon bike-icon">
                    <svg
                      fill="#000000"
                      height="1em"
                      viewBox="0 0 576 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6s-8.2 8.6-14.2 8.6H272c-8.8 0-16-7.2-16-16V16zM212.1 96.5c7 1.9 11.9 8.2 11.9 15.5V336c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5zM5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z" />
                    </svg>
                  </div>
                  <label for="bike" className="radio-tile-label">
                    Animal Sanctuary
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="hindu_temple"
                  checked={this.state.selectedType === "hindu_temple"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <input
                  type="radio"
                  name="placeType"
                  value="church"
                  checked={this.state.selectedType === "church"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon fly-icon">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 512 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.18 9" />
                      <path d="M120 0c13.3 0 24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8V64v64c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H416V352H384V224H352V128H320v96h32V352h32V512H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H128V352h32V224h32V128H160v96H128V352H96V512H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32V256c0-17.7 14.3-32 32-32V160c0-17.7 14.3-32 32-32V64 32 24c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32v48h64V304c0-17.7-14.3-32-32-32zm-32-80v32h64V192c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <label for="fly" className="radio-tile-label">
                    Religious
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="aquarium"
                  checked={this.state.selectedType === "aquarium"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon bike-icon">
                    <svg
                      fill="#000000"
                      height="1em"
                      viewBox="0 0 576 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M275.2 38.4c-10.6-8-25-8.5-36.3-1.5S222 57.3 224.6 70.3l9.7 48.6c-19.4 9-36.9 19.9-52.4 31.5c-15.3 11.5-29 23.9-40.7 36.3L48.1 132.4c-12.5-7.3-28.4-5.3-38.7 4.9S-3 163.3 4.2 175.9L50 256 4.2 336.1c-7.2 12.6-5 28.4 5.3 38.6s26.1 12.2 38.7 4.9l93.1-54.3c11.8 12.3 25.4 24.8 40.7 36.3c15.5 11.6 33 22.5 52.4 31.5l-9.7 48.6c-2.6 13 3.1 26.3 14.3 33.3s25.6 6.5 36.3-1.5l77.6-58.2c54.9-4 101.5-27 137.2-53.8c39.2-29.4 67.2-64.7 81.6-89.5c5.8-9.9 5.8-22.2 0-32.1c-14.4-24.8-42.5-60.1-81.6-89.5c-35.8-26.8-82.3-49.8-137.2-53.8L275.2 38.4zM384 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                    </svg>
                  </div>
                  <label for="bike" className="radio-tile-label">
                    Aquarium
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="radio"
                  name="placeType"
                  value="park"
                  checked={this.state.selectedType === "park"}
                  onChange={this.handleTypeChange}
                  className="radio-button"
                />
                <div className="radio-tile">
                  <div className="icon car-icon">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 448 512"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <label for="drive" className="radio-tile-label">
                    Park
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row-title">What services you want to explore?</div>
          <div className="dropdown">
            <button onClick={this.toggleDropdown}>
              Services &nbsp;
              {this.state.isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
            {this.state.isOpen && (
              <div className="dropdown-content">
                {/* <a href="#">Hotel</a> */}
                <Link to={`/trip/place/placedetails/hotels?location=${this.state.selectedLocation}`}>Hotel</Link>
                {/* <a href="#">Shop</a> */}
                <Link to={`/trip/place/placedetails/shops?location=${this.state.selectedLocation}`}>Shop</Link>
                {/* <a href="#">Taxi Driver</a> */}
                <Link to={`/trip/place/placedetails/taxis?location=${this.state.selectedLocation}`}>Taxi Driver</Link>
                {/* <a href="/trip/place/placedetails/guides?location=${place.place_id}">Travel Guide</a> */}
                <Link to={`/trip/place/placedetails/guides?location=${this.state.selectedLocation}`}>Travel Guide</Link>

              </div>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <Link to="/trip/place/placedetails"> */}
        <div id="places" ref={(ref) => (this.placesDiv = ref)}></div>
        {/* </Link> */}
      </section>
    );
  }
}

export default PersonalizingForm;