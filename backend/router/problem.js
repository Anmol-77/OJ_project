const router=require("express").Router();
const Problem=require("../models/Problem")

router.post("/add", async (req, res) => {
    const { title, desc, statement, input, output, constraints, testcase, createdBy } = req.body;

    // Basic validation
    if (!title || !statement || !input || !output || !constraints || !testcase || !createdBy) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    // Prepare the data for saving
    const problemData = {
        title,
        desc,
        statement,
        input,
        output,
        constraints,
        createdBy,
        testcase
    };

    try {
        const newProblem = new Problem(problemData);
        const savedProblem = await newProblem.save();
        res.status(201).json(savedProblem);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error adding problem", error: err });
    }
});


router.put("/edit/:id", async (req, res) => {
    const { testcase, detail } = req.body;
    const id = req.params.id
  
    if (!testcase || !detail || !id) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    const data = { ...detail, testcase: [...testcase], createdBy: req.user._id };
  
    try {
      const saved = await Problem.findByIdAndUpdate(id, data);
  
      return res.status(201).json(saved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });

router.delete("/delete",async(req,res)=>{
    const id=req.query.id;

    if(!id){
        return res.status(400).json({message: "missing req feilds"});
    }

    try{
        await Problem.findByIdAndDelete(id);

        return res.status(201).json({message:"successfully deleted"});
    }
    catch(err){
        return res.status(500).json(err);
    }

})

router.get("/",async(req,res)=>{
    try{
        const problems=await Problem.find();
        return res.status(200).json(problems);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const problem=await Problem.findById(req.params.id);
        return res.status(200).json(problem);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router;