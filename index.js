const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
var array = [];
//zinc calculation
const zinc_dose = (zinc) =>{
   if(zinc <= 3){
      array.push({"zinc 30mg":1})
   }
   else if(5.5<zinc && zinc<=6.5)
   {
      array.push({"zinc 30mg":2})
   }
   else if(8<zinc && zinc<=9.5)
   {
      array.push({"zinc 30mg":3})
   }
   else if(3< zinc && zinc< 4 )
   {
      array.push({"zinc 22mg":1})
   }
   else if(6.6<= zinc && zinc<=8 )
   {
      array.push({"zinc 22mg":2})
   }
   else if(9.6<= zinc && zinc<=9.9 )
   {
      array.push({"zinc 22mg":3})
   }
   else if(4< zinc && zinc<=5.5)
   {
      array.push({"zinc 50mg": 1})
   }
   else if(10<= zinc && zinc<=12)
   {
      array.push({"zinc 50mg": 2})
   }
}
//vitaminD3 calculation
const vitaminD3_dose = (vitaminD3) =>{
   if(vitaminD3 <= 1000){
      array.push({"vitaminD3 1500 iU":1})
   }
   else if(1001< vitaminD3 && vitaminD3 < 2000){
      array.push({"vitaminD3 1500 iU":2})
   }
   else if(2001<vitaminD3 && vitaminD3<3000 )
   {
      array.push({"vitaminD3 3000 iU":1})
   }
}
//omega3 calculation
const omega3_dose = (omega3) =>{
   if(omega3 <= 800){
      array.push({"omega3 750mg":1});
   }
   else if(801<= omega3 && omega3 < 1400){
      array.push({"omega3 1400mg ":1});
   }
   else if(1401<omega3 && omega3<=1600){
      array.push({"omega3 750mg":2});
   }
}

//dietary supplement calculator
const supplement = (vitaminD3,omega3) =>{
   if(vitaminD3 >=3000 && omega3>=2000){
      array.push({"combinatory dietary supplement":1})
   }
}

app.post('/users',function(req,res){
zinc_dose(req.body.zinc);
vitaminD3_dose(req.body.vitaminD3);
omega3_dose(req.body.omega3);
supplement(req.body.vitaminD3,req.body.omega3);
res.send(array);
})

array = [];

app.listen(port, ()=>{
    console.log('Server Running in Port');
})