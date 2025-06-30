module.exports.bookHouse = async (req,res) =>{

  try {
     const id = req.params;
  console.log(id);
 res.render("listings/booking")

  } catch (error) {
    console.log("error while booking the house",error)
  }
}
 