const Service = require("../models/services");
const ServiceType = require("../models/serviceType");
const ErrorResponse = require("../utils/errorResponse");

//create job
exports.createService = async (req, res, next) => {
  try {
    const service = await Service.create({
      description: req.body.description,
      fee: req.body.salary,
      location: req.body.location,
      serviceType: req.body.serviceType,
      // user: req.user.id
    });
    res.status(201).json({
      success: true,
      service,
    });
  } catch (error) {
    next(error);
  }
};

//single job
exports.singleService = async (req, res, next) => {
  try {
    const service = await Job.findById(req.params.id);
    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    next(error);
  }
};

//update job by id.
exports.updateService = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.service_id, req.body, {
      new: true,
    })
      .populate("serviceType", "serviceTypeName")
      .populate("user", "username");
    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    next(error);
  }
};

//delete job by id.
exports.deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.service_id);
    res.status(200).json({
      success: true,
      message: "service deleted.",
    });
  } catch (error) {
    next(error);
  }
};

//update job by id.
exports.showServices = async (req, res, next) => {
  try {
    // Retrieve all services from the database
    const services = await Service.find();

    // Send the retrieved services as a response
    res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    // Handle possible errors
    res.status(400).json({
      success: false,
      error: "no service",
    });
  }
};
