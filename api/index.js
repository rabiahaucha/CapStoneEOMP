const {express, routes} = require('./controller')
const path = require('path')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandling = require("./middleware/Authenticate");
const port = +process.env.PORT || 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});
 
app.use(express.static('../static'))

app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  cookieParser(), 
  cors(),
   routes
);

routes.get('^/$|/fullstack', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 
        './static/html/Admin.html'))
})

app.listen(port, ()=>{
    console.log(`You are using port: ${port}`);
})

// app.use(errorHandling);