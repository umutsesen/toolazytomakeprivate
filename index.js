require('dotenv').config();
var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());



app.get('/:id', function (req, res) {
  const id = req.params;
  if (id === 1) {
    res.status(301).redirect("https://lesbenjamins.com/")

  } else if (id === 2) {
    res.status(301).redirect("https://bsl.com.tr")

  }  else if (id === 2) {
    res.status(301).redirect("https://b3antlp.com")
    
  }  else if (id === 3) {
    res.status(301).redirect("https://www.yargici.com/")
    
  }  else if (id === 4) {
    res.status(301).redirect("https://www.jimmykey.com")
    
  } else if (id === 5) {
    res.status(301).redirect("https://www.hepsiburada.com/")
    
  }  else if (id === 6) {
    res.status(301).redirect("https://www.sizeandme.com")
    
  } else {
    res.status(301).redirect("https://sizeandme.com/app/getGender")
  }
 
});




app.listen(3000, function() { console.log('listening'); });
