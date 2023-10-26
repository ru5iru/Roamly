import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';
import {
  getLikes,
  getComments,
  getShares,
} from '../models/notificationModel.js';

const getPostOwner = async (postId) => {
  const sql = 'SELECT user_id FROM posts WHERE post_id = $1';
  const result = await query(sql, [postId]);
  if (result.rows.length > 0) {
    return result.rows[0].user_id;
  }
  return null; // Handle the absence of a post owner as per your application's logic
};

const createNotification = async (user_id, action, postId) => {
  let notification_message;
  const targetUser = await getPostOwner(postId);

  if (action === 'like') {
    notification_message = `Your post was liked by ${targetUser}`;
  } else if (action === 'comment') {
    notification_message = `Your post was commented on by ${targetUser}`;
  } else if (action === 'share') {
    notification_message = `Your post was shared by ${targetUser}`;
  } else {
    // Handle other notification types
    notification_message = 'You have a new notification';
  }

  const sql = 'INSERT INTO notifications (user_id, notification_message) VALUES ($1, $2) RETURNING *';
  const result = await query(sql, [user_id, notification_message]);
  return result.rows[0];
};

const notifyLikesCommentsShares = asyncHandler(async (req, res) => {
  const { userId, postId } = req.body;

  const likes = await getLikes(postId);
  const comments = await getComments(postId);
  const shares = await getShares(postId);

  const notifications = [];

  likes.forEach((like) => {
    notifications.push({
      user_id: like.user_id,
      notification_message: `Your post was liked by ${userId}`,
    });
  });

  comments.forEach((comment) => {
    notifications.push({
      user_id: comment.user_id,
      notification_message: `Your post was commented on by ${userId}`,
    });
  });

  shares.forEach((share) => {
    notifications.push({
      user_id: share.user_id,
      notification_message: `Your post was shared by ${userId}`,
    });
  });

  // Use the createNotification function to create notifications
  const createdNotifications = await Promise.all(
    notifications.map((notification) =>
      createNotification(notification.user_id, 'like', postId)
    )
  );

  if (createdNotifications) {
    res.status(201).json(createdNotifications);
  } else {
    res.status(400);
    throw new Error('Failed to create notifications');
  }
});

export { notifyLikesCommentsShares };
