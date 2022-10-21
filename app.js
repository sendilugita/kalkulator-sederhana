const express = require('express');
const path = require('path');

const indexRouter = require('./routers');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
//app.use('views', path.join(__dirname,'views'));
// app.set('view engine', '.hbs');

app.use('/', indexRouter);

app.use((err,req,res,next) => {
  if(err) {
    console.log(err);
    res.status(500).send('Internal Error');
  }
  next();
});
app.use((req,res,next) => res.status(404).send('Not Found'));

const port = process.env.PORT || 3001;
app.listen(port,() => console.log(`listening on port ${port}`));