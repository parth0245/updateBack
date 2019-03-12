const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
    name:{ type: String },
    file:{ type: String }
});
const propertySchema = mongoose.Schema({
    email: { type: String },
    mobile: { type: String },
    propertyFor: { type: String },
    propertyType: { type: String },
    propertyLocation: { type: String },
    societyName: { type: String },
    address: { type: String },
    propertyBedrooms: { type: String },
    propertyBalconies: { type: String },
    propertyTotalFloors: { type: String },
    propertyYourFloor: { type: String },
    propertyFurnishedStatus: { type: String },
    propertyBathrooms: { type: String },
    propertyConstructionAllowed: { type: String },
    propertyOpenSides: { type: String },
    propertyCoveredArea: { type: String },
    propertyCoveredAreaUnit: { type: String },
    propertyCarpetArea: { type: String },
    propertyCarpetAreaUnit: { type: String },
    availablility: { type: String },
    propertyStatus: { type: String },
    ageOrAvailableFrom: { type: String },
    propertyPrice: { type: String },
    propertyMainPrice: { type: String },
    propertyOtherPrice: { type: String },
    images: [imageSchema],
});

module.exports = mongoose.model("Property", propertySchema);