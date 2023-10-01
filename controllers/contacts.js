const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContact = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const postNewContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (response.acknowledged){
    res.status(201).json(response);
  } 
  else {
    res.status(500).json(response.error || "There was an error");
  }
};

const updateContact = async (req, res) => {
  const user = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0 ){
    res.status(204).send();
  }
  else{
    res.status(500).json(response.error || 'there is an error');
  }
};

const deleteContact = async (req, res) => {
  const user = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').remove({ _id: uderId }, true);
  if (response.deletedCount > 0){
    res.status(204).send();
  }
  else{
    res.status(500).json(response.error || 'Error');
  }
};

module.exports = { 
  getAllContact, 
  getSingleContact, 
  postNewContact,
  updateContact, 
  deleteContact };