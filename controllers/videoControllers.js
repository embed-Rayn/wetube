// global controller
export const home = (req, res) => res.render("home", {pageTitle: "Home"});
export const search = (req, res) => {
    // ES6 이전 방법
    // const searchingBy = req.query.term; 
    const{
        query: {term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy});
}

// video controller
export const videos = (req, res) => res.render("videos", {pageTitle: "videos"});
export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const videosDetail = (req, res) => res.render("videosDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "delete Video"});