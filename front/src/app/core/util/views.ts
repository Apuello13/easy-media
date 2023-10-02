import {View} from "../models/view";

export const views: View[] = [
  { path: '/all-posts', title: 'All Publications', isPersonalPosts: false },
  { path: '/my-posts', title: 'My Publications', isPersonalPosts: true }
];
