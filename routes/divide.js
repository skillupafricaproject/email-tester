const router = require("express").Router()


router.post("/", (req, res) => {
    const {div1, div2} = req.body
    const result = div1 / div2
    res.json({message: `The solution is ${result}`})
})


module.exports = router