const Animal = require('../model/Animal');

module.exports = {

    createAnimal: (body, callback) => {

        const createdAnimal = new Animal({
            animalType: body.animalType,
            animalName: body.animalName,
            animalAge: body.animalAge,
        });

        createdAnimal.save(function (err, savedAnimal) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, savedAnimal);
            }
        });
    },
};