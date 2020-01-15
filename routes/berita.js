const express = require("express");
const router = express.Router();
const Berita = require('../model/berita')


router.post("/create", async (req, res) => {
  const {title, description, cover, category} = req.body
  if (!title) return res.status(400).json({statusCode : 400, message:"title is required"})
  if (!description) return res.status(400).json({statusCode : 400, message:"description is required"})
  if (!category) return res.status(400).json({statusCode : 400, message:"category is required"})
  const save = new Berita({
    title,
    description,
    category,
  })
  await save.save()
  return res.json(save)
});

router.post("/:id/update", async (req, res) => {
  const {title, description, cover, category} = req.body
  if (!title) return res.status(400).json({statusCode : 400, message:"title is required"})
  if (!description) return res.status(400).json({statusCode : 400, message:"description is required"})
  if (!category) return res.status(400).json({statusCode : 400, message:"category is required"})
  let berita = await findById(req.params.id)
  berita.title = title
  berita.description = description
  berita.category = category
  await berita.save()
  return res.json(berita)
});

router.post("/:id/delete", async (req, res) => {
  if (!req.params.id) return res.status(400).json({statusCode : 400, message:"id tidak ditemukan"})
  const data = await findById(req.params.id)
  if (!data) return res.json({statusCode : 404, message:"data tidak ditemukan"})
  await data.remove()
  return res.json(data)
});

router.get("/list", async (req, res) => {
  console.log("berhasil")
  const data = await Berita.find({})
  return res.json(data)
});

const findById = async (id) =>{
    const data = await Berita.findById(id);
    return data;
}



module.exports = router;
