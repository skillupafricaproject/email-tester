const router = require("express").Router()


router.post("/", (req, res) => {
    const {sum1, sum2} = req.body
    const result = sum1 - sum2
    res.json({message: `The solution is ${result}`})
})


module.exports = router