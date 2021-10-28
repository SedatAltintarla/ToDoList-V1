const express = require('express');
const app = express();
const port = 3000;

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    
    let today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let dayName = today.toLocaleDateString("en-US", options);
    
    res.render('list', {day: dayName, newListItems: items});
});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    
    items.push(item);

    res.redirect("/");

});


app.listen(port, (req, res) => {
    console.log('Server is listening on port 3000.');
});