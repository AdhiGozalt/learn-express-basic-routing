const express = require('express');
const app= express();

// app.use(( req, res) => {
//     console.log("We got request");
   
//     res.send({ user: 'tobi' })
// })

app.get('', (req, res)=> {
    res.send('HOMEPAGE');
});

app.get('/cats', (req, res)=> {
    res.send('This is cats page');
});
app.post('/cats', (req, res)=> {
    res.send('This is cats page POST');
});

app.get('/about', (req, res)=> {
    res.send('About page');
});


app.get('/blog/:title/:category/:author', (req, res)=> {
    // console.log(req.params);
    const {category,   title,   author   } = req.params;
    res.send(`We are seeing a post with title: ${title} | category: ${category} | author: ${author} | `);
   
});


app.get('/search', (req, res)=> {
    console.log(req.query);

    const { q } = req.query;
    if (!q) {
        return res.send(`<h1>No query was found!</h1>`);
    }

    res.send(`<h1>Search Keyword: ${q}</h1>`);
});






app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});


app.listen(8080, () => {
    console.log("Server is Running on http://localhost:8080");
})

