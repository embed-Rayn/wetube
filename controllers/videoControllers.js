// global controller
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("search");

// video controller
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videosDetail = (req, res) => res.render("videosDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");



