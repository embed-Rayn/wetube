// global controller
export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search")

// video controller
export const videos = (req, res) => res.send("videos")
export const upload = (req, res) => res.send("Upload")
export const videosDetail = (req, res) => res.send("Videos Detail")
export const editVideo = (req, res) => res.send("Edit Video")
export const deleteVideo = (req, res) => res.send("Delete Video")



