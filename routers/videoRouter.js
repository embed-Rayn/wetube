import express from "express";
import routes from "../routes";
import { deleteVideo, editVideo, upload, videos, videosDetail, videos_con } from "../controllers/videoControllers"
const videoRouter = express.Router();

videoRouter.get(routes.videos, videos_con);
videoRouter.get(routes.videosDetail, videosDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;