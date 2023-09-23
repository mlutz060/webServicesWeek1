const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContact);

router.get('/:id', contactsController.getSingleContact)

module.exports = router;