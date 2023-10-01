const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContact);

router.get('/:id', contactsController.getSingleContact)



router.post('/', contactsController.postNewContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);


module.exports = router;