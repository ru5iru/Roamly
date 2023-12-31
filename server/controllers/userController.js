import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import {
   isUserExists,
   registerUsers,
   authUser,
   findUserByID,
   isUserVerified,
   saveProPic,
   saveCoverPic,
   registerServices,
} from "../models/userModel.js";

// desc    Login user
// route   POST /api/users/login
// access  Public
const loginUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   const isVerified = await isUserVerified(email);

   if (!isVerified) {
      res.status(400).json("User is not registered.");
   }


   const user = await authUser(email, password);

   if (user) {
      generateToken(res, user.user_id);
      res.status(201).json({
         firstname: user.firstname,
         lastname: user.lastname,
         user_id: user.user_id,
         email: user.email,
         profile_pic: user.profile_pic,
         cover_pic: user.cover_pic,
      });
   } else {
      res.status(400).json("Invalid Email or Password");
      // throw new Error("Invalid email or password");
   }
});

// desc    Logout user
// route   POST /api/users/logout
// access  Private (users who only has token/login can access)
const logoutUser = asyncHandler(async (req, res) => {
   res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
   });

   res.status(200).json({ message: "User logged out" });
});

// desc    Register new user
// route   POST /api/users/register
// access  Public (because anyone can access without token)
const registerUser = asyncHandler(async (req, res) => {
   const { firstname, lastname, email, password } = req.body;

   const usertype = "Traveller";
   const isExist = await isUserExists(email);


   if (isExist) {
      res.status(400);
      throw new Error("Email already used.");
   }

   const user = await registerUsers(firstname, lastname, email, password, usertype);

   if (user.rowCount > 0) {
      res.status(201).json({
         firstname: user.rows[0].firstname,
         lastname: user.rows[0].lastname,
         user_id: user.rows[0].user_id,
         email: user.rows[0].email,
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});


//register new service

const registerService = asyncHandler(async (req, res) => {
   const { firstname, lastname, email, contact_no, password, servicename, servicetype, type, location } = req.body;

   const usertype = "Service";

   // try {
   // Check if the email already exists in the users table
   const isExist = await isUserExists(email);

   if (isExist) {
      res.status(400);
      throw new Error("Email already used.");
   }

      // Register the user and service provider
    const { user, serviceProvider } = await registerServices(
      firstname, lastname, email, contact_no, password, usertype, servicename, servicetype, type, location
    );
      

    if (user.rowCount > 0) {
      // Send a response with the user and service provider data
      res.status(201).json({
         user_id: user.user_id,
         firstname: user.firstname,
         lastname: user.lastname,
         email: user.email,
         contact_no: user.contact_no,
         servicename: serviceProvider.service_name,
         servicetype: serviceProvider.service,
         type: serviceProvider.type,
         location: serviceProvider.location,
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   } 
});

// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getCurrentUserProfile = asyncHandler(async (req, res) => {
    
   const user = await findUserByID(req.user.user_id);

   if (user) {
      res.status(201).json({
         user_id: user.user_id,
         firstname: user.firstname,
         lastname: user.lastname,
         email: user.email,
         contact_no: user.contact_no,
         user_type: user.user_type,
         isverified: user.isverified,
         profile_pic: user.profile_pic,
         cover_pic: user.cover_pic,
      });
   } else {
      res.status(404);
      throw new Error("Usr not found");
   }
});

// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    
   const user = await findUserByID(req.params.id);

   if (user) {
      res.status(201).json({
         user_id: user.user_id,
         firstname: user.firstname,
         lastname: user.lastname,
         email: user.email,
         contact_no: user.contact_no,
         user_type: user.user_type,
         isverified: user.isverified,
         profile_pic: user.profile_pic,
         cover_pic: user.cover_pic,
      });
   } else {
      res.status(404);
      throw new Error("Not found");
   }
});

// desc    Update user profile
// route   PUT /users/propic
// access  Private
const updateProfilePic = asyncHandler(async (req, res) => {
   const { user_id, img } = req.body;

   const post = await saveProPic(user_id, img);

   if (post.rowCount > 0) {
      res.status(201).json({
         user_id: post.rows[0].user_id,
      });
   } else {
      res.status(400);
      throw new Error("Error");
   }
});

// desc    Update user profile
// route   PUT /users/propic
// access  Private
const updateCoverPic = asyncHandler(async (req, res) => {
   const { user_id, img } = req.body;

   const post = await saveCoverPic(user_id, img);

   if (post.rowCount > 0) {
      res.status(201).json({
         user_id: post.rows[0].user_id,
      });
   } else {
      res.status(400);
      throw new Error("Error");
   }
});

const getUserProfilePic = asyncHandler(async (req, res) => {
   const { email } = req.params; // Assuming the email is provided in the request parameters
   const user = await getUserProfilePicByEmail(email);

   if (user) {
       res.status(200).json({ profile_pic: user.profile_pic });
   } else {
       res.status(404).json({ message: 'User not found' });
   }
}); 
export {
   registerUser,
   loginUser,
   logoutUser,
   getCurrentUserProfile,
   getUserProfile,
   updateProfilePic,
   updateCoverPic,
   registerService,
};
