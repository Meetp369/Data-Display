const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

const displayroutes=require('./routes/DisplayRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/display',displayroutes);

const PORT=4000;

app.listen(PORT,()=>{
    console.log("Server is runnig on port",PORT)
});

mongoose.connect("mongodb+srv://meetpatel:meetpatel@cluster0.p6eubgg.mongodb.net/apidata?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  },(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Connected to database");
    }
})