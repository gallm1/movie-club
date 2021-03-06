const router = require('express').Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async(req, res) => {
    res.render("createpost", { logged_in: true });
    return;
});

module.exports = router;