import express from "express";

let cars = [
    {"id": 1, "model": "porsche", "make": 2000},
    {"id": 2, "model": "lamborghini", "make": 2000},
    {"id": 3, "model": "mercedes", "make": 2000},
    {"id": 4, "model": "tesla", "make": 2000},
    {"id": 5, "model": "aston martin", "make": 2000},
]

const app = express()
app.use(express.json())

app.get('',(req,res)=>{

    res.json(cars);
})

app.post('./newcar',(req,res)=>{
    const newcar = req.body
    cars.push(newcar);
    res.json(users);
})

app.put('./editor',(req,res)=>{
    const id = Number(req.params.id)
    const userbody = req.body;
    cars.forEach((car,index)=>{
       if(cars.id===id){
        cars[index] = userbody;
       }
    })
    res.json(users)
})

app.delete('./deletecar/:id',(req,res)=>{
    const id = Number(req.params.id)
    cars = cars.filter((car)=> car.id !== id)
    res.json(cars)
}) 

app.listen(3000, ()=>{
    console.log('server connected!')
})