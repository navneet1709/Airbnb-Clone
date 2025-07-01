const { object } = require("joi");

module.exports.bookHouseForm = async (req,res) =>{

  try {
     
     const { id } = req.params;
      // Extracting id from params
  console.log(id);
  // Assuming you have a Listing model to fetch the listing details
  const Listing = require("../models/listing");
  const listing = await Listing.findById(id)

  if (!listing) {
    console.log("Listing not found");
  }else{
       console.log("Listing found:", listing);
       const House_title = listing.title;
       const House_price = listing.price; 
       const House_location = listing.location;
       const House_country = listing.country;
      res.render("listings/bookingForm", {
        listingId: id,
        House_title,
        House_price,
        House_location,
        House_country
      });
  }
 } catch (error) {
    console.log("error while booking the house",error)
  }
}
 