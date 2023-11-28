import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import { pool } from './Архив/db.js'

// configure the app to use bodyParser()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express, { Router } from "express";

const PORT = 5000;

const app = express()

app.use(express.json())

class UserControllers {
    async createUser (req, res) {
        fetch(`http://localhost:3000/users`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((data) => {return data.json()})
        .then((data) => {
            const mails = []
            data.forEach(element => {
                mails.push(element.mail)
            })
            if (mails.includes(req.body.mail)) {
                res.status(401).json("This mail is already registered!")
            } else {
                fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(req.body),
                })
                .then((data) => {return data.json()})
                .then((data) => {
                    res.status(200).json("Ok")
                })
                .catch(() => {
                    res.status(503).json("Failed to load data!")
                })
            }
        })
        .catch(() => {
            res.status(503).json("Failed to load data!")
        })
        
    }

    async getUsers (req, res) {
        const {mail, password} = req.query
        fetch(`http://localhost:3000/users`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((data) => {return data.json()})
        .then((data) => {
            let changer = true
            for (let i = 0; i < data.length; i++) {
                const element = data[i]
                if (mail == element.mail && password == element.pass) {
                    res.status(200).json("YES!")
                    changer = false
                    break
                } else if (mail == element.mail) {
                    res.status(401).json("Wrong password")
                    changer = false
                    break
                } 
            }
            if (changer) {
                res.status(401).json("Incorrect username")  
            }
        }
        )
    }
}

const UserConts = new UserControllers()

app.get("/main", (req, res) => {
    UserConts.getUsers(req, res)
})

app.post("/register", (req, res) => {
    UserConts.createUser(req, res)
})

app.use(express.static(__dirname + '/frontend'));

app.listen(PORT, () => {console.log("SERVER START")})

