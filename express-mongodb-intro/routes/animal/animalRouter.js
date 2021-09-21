var express = require('express');
var router = express.Router();
var animalController = require("./controller/animalController");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ message: "animal page" })
});

router.post('/create-animal', function(req, res) {
    animalController.createAnimal(req.body, function(err, savedAnimal) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err.message});
        } else {
            res.json({ message: "success", savedAnimal })
        }
    });
});

module.exports = router;
