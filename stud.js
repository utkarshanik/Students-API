const express = require("express");
const router = express.Router();
const User = require("./User");

//Route 1: Adding new Student
router.post('/createuser',(req,res)=>{   
    
    console.log(req.body);
    
    const user=User(req.body)
    user.save();
    res.send(req.body)
})

//Route 2: Viewing all Student
router.get("/getuser",async (req, res) => {
    try {
      const use = await User.find();
      res.json(use);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  });

//Route 3: Updating  Student details  
  router.put("/updateuser/:id", async (req, res) => {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updatedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occurred");
    }
  });
  
  //Route 4: Deleting Student details
  router.delete("/deleteuser/:id", async (req, res) => {
    try {
      const deletedUser = await User.deleteOne({ _id: req.params.id });
      res.json(deletedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occurred");
    }
  });
  

module.exports = router;
