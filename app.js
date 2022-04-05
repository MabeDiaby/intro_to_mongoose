// Dependencies
const mongoose = require("mongoose");
const Tweet = require("./tweet.js");

// Global Configuration
const mongoURI = "mongodb://localhost:27017/tweets";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI,{
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log("the connection with MongoDB is established");
});

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", err => console.log(err.message + " is MongoDB not running?"));
db.on("connected", () => console.log("MongoDB connected on: ", mongoURI));
db.on("disconnected", () => console.log("MongoDB disconnected"));

// --------Query Section--------
// const myFirstTweet = {
//     title: "Deep Thoughts",
//     body: "Friends, I have been navel-gazing",
//     author: "Karolin"
//   };

// Tweet.create(myFirstTweet, (error, tweet) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(tweet);
//     }
//     db.close();
// })

// const manyTweets = [
//     {
//       title: 'Deep Thoughts',
//       body: 'Friends, I have been navel-gazing',
//       author: 'Karolin'
//     },
//     {
//       title: 'Sage Advice',
//       body: 'Friends, I am vegan and so should you',
//       author: 'Karolin',
//       likes: 20
//     },
//     {
//       title: 'Whole Reality',
//       body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
//       author: 'Karolin',
//       likes: 40
//     },
//     {
//       title: 'Organic',
//       body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
//       author: 'Karolin',
//       likes: 162
//     },
//     {
//       title: 'Confusion',
//       body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
//       author: 'Karolin',
//       likes: -100
//     },
//     {
//       title: 'Vespa',
//       body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
//       author: 'Karolin',
//       likes: 2
//     },
//     {
//       title: 'Licensed',
//       body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
//       author: 'Karolin',
//       likes: 3
//     },
//     {
//       title: 'Water',
//       body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
//       author: 'Karolin',
//     },
//   ];

//   Tweet.insertMany(manyTweets, error => {
//       if(error) console.log(error);
//       console.log(tweets);
//       db.close()
//   })

// or

// Tweet.create(myFirstTweet, (error, tweet) => {
//     if(error) console.log(error);
//         console.log(tweet);
//         db.close();
// })

// Tweet.find(
//     {likes:{$gte:20}},
//     // {title:1, body:1, _id:0},
//     (err, data) => {
//         console.log(data);
//         const totalLikes = data.map((a,b) => a + b.likes, 0)
//         console.log(`total likes:${totalLikes}`);
//         db.close()
//     }
// )

// Tweet.findOneAndRemove({title: "Deep Thoughts"}, (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
//     db.close()
// })

// Tweet.findByIdAndUpdate(
//     {title:"Vespa"},
//     // {sponsored:true},
//     {likes: 17001},
//     {new: true},
//     (err, data) => {
//         if (err) console.log(err)
//         console.log(data);
//         db.close()
//     }
// )

Tweet.find(
    {likes: {$gte:20}},
    {title:1, likes:1, _id:0},
    )
    // .limit(2)
        .sort("likes")
    .then(data => {
        console.log(data)
        const oneLess = data.map (obj => obj.likes -  1);
        console.log(oneLess);
    })
    .then(() => db.close())
// -------------------------
