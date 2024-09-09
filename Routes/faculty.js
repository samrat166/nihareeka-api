const router = require("express").Router();
const faculty = require("../Controller/facultyMember");

router.post("/faculty", faculty.postFaculty);
router.get("/faculty", faculty.getFaculty);
router.delete("/faculty/:id", faculty.daleteFaculty);

module.exports = router;
