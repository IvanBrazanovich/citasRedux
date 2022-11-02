const express = require("express");
const cors = require("cors");
const bp = require("body-parser");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/citas", async (req, res) => {
  try {
    const respuesta = await prisma.cita.findMany();

    res.json(respuesta);
  } catch (error) {
    res.status(404);
  }
});

app.post("/citas", async (req, res) => {
  try {
    const respuesta = await prisma.cita.create({
      data: {
        mascota: req.body.mascota,
        propietario: req.body.propietario,
        email: req.body.email,
        alta: req.body.alta,
        sintomas: req.body.sintomas,
      },
    });
    res.json(respuesta);
  } catch (err) {
    console.log("Hola");
  }
});

app.put("/citas", async (req, res) => {
  try {
    const respuesta = await prisma.cita.update({
      where: {
        id: req.body.id,
      },
      data: {
        mascota: req.body.mascota,
        propietario: req.body.propietario,
        email: req.body.email,
        alta: req.body.alta,
        sintomas: req.body.sintomas,
      },
    });

    res.json(respuesta);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/citas", async (req, res) => {
  try {
    const respuesta = await prisma.cita.delete({
      where: {
        id: req.body.id,
      },
    });

    res.json(respuesta);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {});
