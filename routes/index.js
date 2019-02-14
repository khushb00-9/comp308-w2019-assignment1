let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home/index", { title: "Home" });
});

/* GET about page. */
router.get("/about", function(req, res, next) {
  res.render("about/index", { title: "About" });
});

/* GET projects page. */
router.get("/projects", function(req, res, next) {
  res.render("projects/index", { title: "Projects" });
});

/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("services/index", { title: "Services" });
});

/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("contact/index", { title: "Contact" });
});

module.exports = router;
