const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {

    let sqlText = `SELECT * FROM "item" ORDER BY "id";`;
    
    pool.query( sqlText )
        .then( (result) => {
            res.send( result.rows );
        })
        .catch( (error) => {
            console.log( `Couldn't GET shelf items.`, error );
            res.sendStatus(500);
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(`POST item `, req.body);
    
    const queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`
    pool.query(queryText, [req.body.description, req.body.image_url, req.body.user_id])
        .then(() => res.sendStatus(201))
        .catch((error) => {
        console.log(`error posting item`, error);
        
        res.sendStatus(500);})
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let sqlText = `DELETE FROM "item" WHERE id = $1;`
    pool.query(sqlText, [id])
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Failed to remove animal', error);
        console.log('Error', error);
        res.sendStatus(500);
    })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    let sqlText = `SELECT "user"."username", COUNT("item"."user_id") FROM "user"
                    JOIN "item" ON "item"."user_id" = "user"."id"
                    GROUP BY "user"."username"; `;

    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Couldn't GET user info.`, error);
            res.sendStatus(500);
        })
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;