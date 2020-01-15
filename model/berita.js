const mongoose = require("mongoose");

const BeritaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    cover: {
      type: String
    },
    category: {
      type:String,
      enum: ["Artis", "Hot", "News"],
    }
  },
  {
    timestamps: true
  }
);

module.exports = Berita = mongoose.model("berita", BeritaSchema);
