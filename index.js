const { log } = require("console");
const express=require("express");
const { todo } = require("node:test");
const { title } = require("process");
const app=express();
app.use(express.json());

const todos=
[{id:1,
    title:"todo1",
    description:"todo-description-1"},
    {id:2,
    title:"todo2",
    description:"todo-description-2"},
    {id:3,
    title:"todo3",
    description:"todo-description-3"},
    {id:4,
    title:"todo4",
    description:"todo-description-4"}
]

app.get("/",(req,res)=>{
    res.json({
        msg:"Hello From Home Route"
});
})


app.get("/todos",(req,res)=>{
    res.json({
        todos,
    });
})

app.listen(8080,()=>{
    console.log("Sever Started on port 8080");
})