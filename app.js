const express = require('express');
const login = require('./controller/main');

var app = express();

// set up a templete enginee
app.set('view engine', 'ejs');

// view static files
app.use(express.static('./views'));

// go to controller
login(app);

app.listen(8080);
console.log("Server is running in port 8080");

/*
<link rel="stylesheet" href="../view/css/bootstrap.min.css">
   </head>
   <body>
       <div class="container">
           <h2 class="text-center">Login</h2>
           <br>
           <form class="" action="#" method="POST">
               <div class="from-group">
                   <label for="email">Email: </label>
                   <input class="form-control" type="email" name="email" value="">
                   <label for="pass">Password: </label>
                   <input class="form-control" type="password" name="pass" value="">
                   <br>
                   <div class="text-center">
                       <button type="submit" name="button" class="btn btn-primary btn-lg">Login</button>
                   </div>
               </div>
           </form>
           <br>
           <div class="text-center">
               <a href="register.php">Create new account</a>
           </div>
       </div>
   </body>
   <script src="../view/js/bootstrap.min.js" charset="utf-8"></script>
*/
