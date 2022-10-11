import { Router } from "express";
import {db }from "./database/db.js"

export const router = Router()

    router.get('/',(req,res)=>{

        res.send("principal")

    })
    router.get('/api',(req,res)=>{

        res.json(db)

    })


