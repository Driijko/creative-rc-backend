// Import libraries
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https= require('https');

// Express Initialize
const app = express();
// Express Uses CORS
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Set up our server
app.listen(process.env.PORT || 8000, () => {
  console.log('listen port 8000');
})

// tags: {
//   Languages: {
//     JavaScript: [
//       "d3.js",
//       "p5.js"
//     ],
//     Python: [
//       "pygame"
//     ]
//   },
//   Mediums: [
//     "Design",
//     "Music",
//     "Visual Art"
//   ]
// },

const data = {
  projects: {
    0: {
      name: "Pong-Pong",
      description: "A version of Pong made entirely in React! First to five points wins. You can alter the "
                    + "angle of the ball by deflecting it off the different sections of a paddle.",
      link: "https://driijko.github.io/Pong-Pong/"        
    },
    1: {
      name: "Abyss",
      description: "An okay game",
      link: "https://driijko.github.io/Abyss/"
    }
  },

  profiles: {
    "Dree Ko": {
      firstName: "LongFirstName",
      lastName: "LongLastName",
      colorTheme: "Fruit Basket",
      fontTheme: "Well Actually",
      pronouns: "they/them",
      batch: "Winter 2, 2020",
      description: "I'm a web developer, game designer and musician. I'm attracted to coding as an aesthetic tool "
                  + "that faciliates interactive experiences. As a musician, I play modal classical music that draws "
                  + "upon a variety of traditions from around the world, and I also love analog synthesizers." 
                  + "I'm currently studying full-stack development, physical/biological simulation, and GameMaker "
                  + "Studio 2.",
      profileLinks: [
        ["Github", "https://github.com/Driijko"],
        ["LinkedIn", "https://linkedIn.com/Driijko"]
      ],
      // projects: [0, 1], 
      projects: [
        {
          name: "Pong-Pong",
          description: "A version of Pong made entirely in React! First to five points wins. You can alter the "
                        + "angle of the ball by deflecting it off the different sections of a paddle.",
          link: "https://driijko.github.io/Pong-Pong/"        
        },
        {
          name: "Abyss",
          description: "An okay game",
          link: "https://driijko.github.io/Abyss/"
        }
      ]
                
    }
  }
}

app.get('/tools', async (req, res) => {
  res.send(data.tags);
});

app.get('/login', async (req, res) => {
  res.send(data.profiles["Dree Ko"]);
});

// //creates our OAuth credientals
// const credentials = {
//   client: {
//     id: process.env.OAUTHID,
//     secret: process.env.OAUTHSECRET
//   },
//   auth: {
//     tokenHost: 'https://www.recurse.com/oauth/authorize'
//   }
// };

// const oauth2 = require('simple-oauth2').create(credentials);

// //login route
// app.get("/login", async function (req, res) {
//   try {
//     const authorizationUri = oauth2.authorizationCode.authorizeURL({
//       redirect_uri: "http://localhost:8000/callback"
//     });

//     // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
//     res.redirect(authorizationUri);
//   } catch (error) {
//     console.log("Auth got error", error.message);
//     res.send("Error creating token: " + error.message);
//   }
// });

// //callback route
// app.get("/callback", async function (req, res) {
//   console.log("/callback");
//   const tokenConfig = {
//     code: req.query.code,
//     redirect_uri: "http://localhost:8000/callback"
//   };

//   try {
//     const result = await oauth2.authorizationCode.getToken(tokenConfig);
//     const accessToken = oauth2.accessToken.create(result);
//     //access token
//     const token = accessToken.token.access_token
//     console.log(token)
//     //options for http request
//     const options = {
//       hostname: "www.recurse.com",
//       path: '/api/v1/profiles/me',
//       method: 'GET',
//       headers: {
//         "Authorization": `Bearer ${token}`,
//       }
//     }
//     //http request to get the user's profile information
//     const req = https.request(options, res => {
//       res.setEncoding('utf8');
//       res.on('data', data => {
//         //data is a JSON of the user's profile information
//         console.log(data)
//       })
//     })

//     req.on('error', error => {
//       console.error(error)
//     })

//     req.end()
//     //redirect to account page
//     res.redirect("/account");
//   } catch (error) {
//     console.log("Access Token Error", error.message);
//     res.send("Error creating token: " + error.message);
//   }
// });

// app.get('/account', async (req, res) => {
//   res.send("welcome to your account");
// });