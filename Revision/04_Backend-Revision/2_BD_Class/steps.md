## steps

### step 1) create a folder

### step 2) move into that folder

### step 3) npm init -y

### step 4) open folder using VSCode

### step 5) npm i express

### step 6) create server.js

### step 7) make a express instance

### step 8) Initiate express instance into app variable

```
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server stared at port no. 3000");
});

output ->

node server.js
Server stared at port no. 3000


```

### step 9) npm i mongoose

### step 10) npm i nodemon

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

### step 11) npm run dev

### step 12) npm i dotenv
