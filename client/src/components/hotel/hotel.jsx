// HotelCard.scss

.hotel-card {
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 16px;
    padding: 16px;
  
    .left-section {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  
      .hotel-photo {
        max-width: 100%;
        max-height: 100%;
      }
    }
  
    .right-section {
      flex: 2;
      padding-left: 16px;
  
      .details {
        display: flex;
        flex-direction: column;
        gap: 8px;
  
        h2 {
          font-size: 1.5rem;
        }
  
        p {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
  
          .location {
            color: #4caf50;
          }
  
          .phone {
            color: #f44336;
          }
  
          .hotel {
            color: #2196f3;
          }
        }
  
        .booking-sites {
          display: flex;
          align-items: center;
          gap: 8px;
  
          a {
            display: block;
  
            img {
              max-height: 20px;
            }
          }
        }
      }
    }
  }
