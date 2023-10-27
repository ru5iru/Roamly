// import asyncHandler from 'express-async-handler';
// import getLikes from '../models/likeModel.js';
// import { getPostOwner, createNotification, fetchNotificationsFromDatabase } from '../models/notificationModel.js';

// const getNotifications = asyncHandler(async (req, res) => {
//   const notifications = await fetchNotificationsFromDatabase();
//   res.json(notifications);
// });

// const notifyLikesCommentsShares = asyncHandler(async (req, res) => {
//   const { userId, postId } = req.body;

//   const likes = await getLikes(postId);
//   // const comments = await getComments(postId);
//   // const shares = await getShares(postId);

//   const notifications = [];

//   likes.forEach((like) => {
//     notifications.push({
//       user_id: like.user_id,
//       notification_message: `Your post was liked by ${userId}`,
//     });
//   });

//   // comments.forEach((comment) => {
//   //   notifications.push({
//   //     user_id: comment.user_id,
//   //     notification_message: `Your post was commented on by ${userId}`,
//   //   });
//   // });

//   // shares.forEach((share) => {
//   //   notifications.push({
//   //     user_id: share.user_id,
//   //     notification_message: `Your post was shared by ${userId}`,
//   //   });
//   // });

//   // Use the createNotification function to create notifications
//   const createdNotifications = await Promise.all(
//     notifications.map((notification) =>
//       createNotification(notification.user_id, notification.notification_message)
//     )
//   );

//   if (createdNotifications) {
//     res.status(201).json(createdNotifications);
//   } else {
//     res.status(400);
//     throw new Error('Failed to create notifications');
//   }
// });

// export { notifyLikesCommentsShares, getNotifications };
