const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("connection Failed");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  name: { type: String, require: true },
  year: Number,
  score: { type: Number, min: 0, max: 10 },
  isWatched: { type: Boolean, default: false },
});

const Movie = mongoose.model("Movie", movieSchema);
// const ironman = new Movie({
//   name: "Ironman",
//   year: 2010,
//   score: 7,
//   isWactched: false,
// });

// ironman.save()
//   .then((m) => {
//     console.log(m);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.insertMany([
//   { name: "Star Wars", year: 2008, score: 9, isWatched: true },
//   { name: "Spiderman", year: 2012, score: 7, isWatched: false },
//   { name: "Gardian of Galaxy", year: 2010, score: 7, isWatched: true },
//   { name: "Dr. Strange", year: 2011, score: 6.5, isWatched: true },
// ]);
