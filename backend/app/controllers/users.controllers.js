const client = require('../util/db_config');

// CRUD controllers

const SCHEMA = process.env.INSTANCE_SCHEMA;
const TABLE = 'user';

// Create entry
exports.createOne = async (req, res, next) => {
  console.log('createOne: [POST] /users/');
  try {
    const user = await client.insert({
      table: TABLE,
      records: [
        {
          username: req.body.username,
          password: req.body.password,
          followers: req.body.followers,
        },
      ],
    });

    res.json(user);
  } catch (error) {
    res.json(error);
    console.error(error);
  }
};

// Get All

exports.getAll = async (req, res, next) => {
  console.log('getAll: [GET] /users/');

  try {
    const QUERY = `SELECT * FROM ${SCHEMA}.${TABLE}`;
    const users = await client.query(QUERY);
    res.json(users);
  } catch (error) {
    console.error(`ERROR in getAll USER: ${error}`);
    return res.status(500).json(error);
  }
};

// Get One

exports.getOne = async (req, res, next) => {
  console.log('getOne: [GET] /users/:id');
  try {
    const QUERY = `SELECT * FROM ${SCHEMA}.${TABLE} WHERE id="${req.params.id}"`;
    const user = await client.query(QUERY);
    res.json(user);
  } catch (error) {
    console.error(`ERROR in getOne USER: ${error}`);
  }
};

// Update one
exports.updateOne = async (req, res, next) => {
  console.log('updateOne: [PUT] /users/:id');
  try {
    const modUser = await client.update({
      table: TABLE,
      records: [
        {
          id: req.params.id,
          username: req.body.username,
          password: req.body.password,
          followers: req.body.followers,
        },
      ],
    });
    res.json(modUser);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

//DELETE ONE
exports.deleteOne = async (req, res, next) => {
  console.log('deleteOne: [DELETE] /users/:id');

  try {
    const QUERY = `DELETE FROM ${SCHEMA}.${TABLE} WHERE id="${req.params.id}"`;
    const deleteUser = await client.query(QUERY);
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};
