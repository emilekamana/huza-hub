const express = require("express");
const router = express.Router();
const {
  createService,
  singleService,
  updateService,
  showServices,
  deleteService,
} = require("../controllers/serviceController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

//jobs routes

// /api/job/create
router.post("/service/create", isAuthenticated, isAdmin, createService);
// /api/job/id
router.get("/service/:id", singleService);
// /api/job/update/job_id
router.put(
  "/service/update/:service_id",
  isAuthenticated,
  isAdmin,
  updateService
);
// /api/job/delete/job_id
router.delete(
  "/service/delete/:service_id",
  isAuthenticated,
  isAdmin,
  deleteService
);
// /api/jobs/show
router.get("/service/show", showServices);

module.exports = router;
