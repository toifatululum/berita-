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
      enum: ["Artis", "Hot", "News"],
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = Berita = mongoose.model("berita", BeritaSchema);
