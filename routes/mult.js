const router = require("express").Router()


router.post("/", (req, res) => {
    const {mult1, mult2} = req.body
    const result = mult1 * mult2
    res.json({message: `The solution is ${result}`})
})


module.exports = router