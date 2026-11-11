const express = require('express');  
const mysql = require('mysql'); 
const app = express(); 
const port = 3000; 
const cors = require('cors'); 
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "fitness_db",
    port: 3307
});


app.listen (3000, ()=> {
    console.log("szerver fut a 3000porton ");
});

app.get("/berletek", async (req, res) => {
    try {
        const [eredmeny] = await db.query(`
            SELECT * FROM berletek ORDER BY ASC
        `);
 
        res.json(eredmeny);
    } catch (error) {
        res.status(500).json({ hiba: error.message });
    }
});

app.get("/berletek/elerheto", async (req, res) => {
    try {
        const [eredmeny] = await db.query(`
           
        `);
 
        res.json(eredmeny);
    } catch (error) {
        res.status(500).json({ hiba: error.message });
    }
});

app.get("/berletek/kereses/:szoveg", async (req, res) => {
    try {
        const [eredmeny] = await db.query(`
            
        `);
 
        res.json(eredmeny);
    } catch (error) {
        res.status(500).json({ hiba: error.message });
    }
});

app.get("/tipusok/statisztika", async (req, res) => {
    try {
        const [eredmeny] = await db.query(`
            
        `);
 
        res.json(eredmeny);
    } catch (error) {
        res.status(500).json({ hiba: error.message });
    }
});

app.get("/berletek/dragak", async (req, res) => {
    try {
        const [eredmeny] = await db.query(`
            
        `);
 
        res.json(eredmeny);
    } catch (error) {
        res.status(500).json({ hiba: error.message });
    }
});