import "./firstView.scss";

export const FirstView = () => {
   return (
      <section className="text-center text-lg-start custom-stylefv">
         <div className="titlefv">
            <h1 className="custom-sizefv">
               Discover, Share, and Explore with Roamly!
            </h1>
         </div>
         <div className="contentfv">
            <p className="centered-paragraph">
               Join our travel community and unlock a world of amazing
               experiences. Connect with fellow travelers, share your
               adventures, and receive personalized recommendations for your
               next destination. Start your journey today!
            </p>
         </div>
         <div className="form-outline mb-0">
            <button
               type="submit"
               className="btn-primary btn-block mb-4 custom-buttonfv"
               style={{
                  fontFamily: "'Fira Sans', sans-serif",
                  width: "120px",
                  fontSize: "0.9rem",
               }}
               onClick={() =>{
                  window.location.href ='http://localhost:3000/signup';
               }}
            >
               JOIN NOW
            </button>
         </div>
         <div className="text-left">
            <p className="mb-0">
               <a
                  href="/signupsp"
                  className="fw-bold"
                  style={{
                     fontFamily: "'Fira Sans', sans-serif",
                     color: "#51BCD3",
                     fontSize: "0.9rem",
                     textDecoration: "none",
                     transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#1E89EF")}
                  onMouseOut={(e) => (e.target.style.color = "#51BCD3")}
               >
                  Register as a service
               </a>
            </p>
         </div>
      </section>
   );
};

export default FirstView;
