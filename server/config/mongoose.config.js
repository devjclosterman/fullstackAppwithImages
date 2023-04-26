const mongoose = require('mongoose');

let db = "loot-squad"

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log(`...established connection with DB named: ${db}...`))
    .catch(err => console.log("Error: ", err))

