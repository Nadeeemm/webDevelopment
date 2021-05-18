const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Playlist", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection Sucessfull"))
  .catch((err) => console.log(err));

//   ========== Create Schema ==========

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: {
    type: String,
  },
  videos: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//  ========== Create collection ==========

const Playlist = new mongoose.model("Playlist", playlistSchema);

// ========== Create/Insert One Document ==========

// const createDocument = async()=>{
//     try{
//         const reactPlaylist = new Playlist({
//             name:"React Js",
//             type:"Back-end",
//             videos: 50,
//             active:true,
//         })
//         const result = await reactPlaylist.save();
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// createDocument();

// ========== Create/Insert many Document ==========
const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "React Js",
      type: "Back-end",
      videos: 50,
      active: true,
    });
    const javaScript = new Playlist({
      name: "Java Script",
      type: "front-end",
      videos: 50,
      active: true,
    });
    const esxpressJs = new Playlist({
      name: " Express JS",
      type: "Back-end",
      videos: 50,
      active: true,
    });
    const nodeJs = new Playlist({
      name: "Node Js ",
      type: "Back-end",
      videos: 50,
      active: true,
    });
    const result = await Playlist.insertMany([
      reactPlaylist,
      javaScript,
      esxpressJs,
      nodeJs,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
