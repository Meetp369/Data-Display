// import fetch  from "node-fetch";
// const fetch=require("node-fetch");
const displaySchema=require('../model/DisplaySchema');
// let data1=[]
module.exports.saveData=async(req,res)=>{
    await displaySchema.remove({})
    let tickers= await fetch("https://api.wazirx.com/api/v2/tickers");
    let answer= await tickers.json();
    let xy = await Object.values(answer);
    let data1=await xy.slice(0,10);
    // fetch("https://api.wazirx.com/api/v2/tickers").then((data)=>{
    // data.json().then((new1)=>{
    //     data1=Object.values(new1).slice(0,10)
    //     console.log(data1)
    // });
    // }).catch((err)=>{
    // console.log(err)
    // })
    // name, last, buy, Sell, volume, base_unit
    // console.log(data1);
    // console.log("meet")
    data1.map(async (val)=>{
        // var data={
        //     name:val.name,
        //     last:val.last,
        //     buy:val.buy,
        //     sell:val.sell,
        //     volume:val.volume,
        //     base_unit:val.base_unit
        // }
        // console.log(val)
        var display= await new displaySchema({
            name:val.name,
            last:val.last,
            buy:val.buy,
            sell:val.sell,
            volume:val.volume,
            base_unit:val.base_unit
        });
        // console.log(display);
        // await display.save((err,data)=>{
        //     if(err){
        //         res.status(500).json({
        //             message:"error occured",
        //             error:err
        //         })
        //     }else{
        //         res.status(200).json({
        //             message:"data save",
        //             data:data
        //         })
        //     }
        // })
        await display.save()
    })
    // await displaySchema.find({},(err,d)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(d)
    //     }
    // })
    res.status(200).json({
        message:"sata saved",
        flag:1
    })
    // console.log(displaySchema.find())
}

module.exports.getData=(req,res)=>{

    displaySchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error occured",
                error:err
            })
        }
        else{
            res.status(200).json({
                message:"get that data",
                
                data:data
            })
        }
    })
}