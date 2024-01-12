const Person = require("../models/person.model");

exports.create = async (req, res) => {
  const person = await Person.create(req.body);

  if (person) {
    res.status(200).send({ message: "Ok!" });
  } else {
    res.status(500).send({ message: "Error." });
  }
};

exports.read = async (req, res) => {
  const person = await Person.read();
  const newPerson = person.filter((e) => e.name === "Josue");
  console.log({ newPerson });
  if (newPerson.length > 0) {
    res.status(200).send(newPerson);
  } else {
    res.status(500).send({ message: "Error." });
  }
};

exports.update = async (req, res) => {
  const person = await Person.update(req.params.id, req.body);

  if (person) {
    res.status(200).send({ message: "Ok!" });
  } else {
    res.status(500).send({ message: "Error." });
  }
};

exports.delete = async (req, res) => {
  const person = await Person.delete(req.params.id, req.body);

  if (person) {
    res.status(200).send({ message: "Ok!" });
  } else {
    res.status(500).send({ message: "Error." });
  }
};

exports.readById = async (req, res) => {
  const person = await Person.readById(req.params.id);
  res.status(200).send(person);
};
