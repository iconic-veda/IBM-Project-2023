# IBM-Project-2023

## Step 1: Creating a root folder
-> Create a folder and open it in a code editor

## Step 2: Set up your react project
-> Open terminal window (in the code editor)
<pre>
cd folder-name
npx create-react-app app-name
cd app-name
npm install
npm install axios
npm install express nano body-parser cors
npm install --legacy-peer-deps

npm install axios --save --legacy-peer-deps

npm install bootstrap --save --legacy-peer-deps

npm install react-bootstrap-table-next --save --legacy-peer-deps

npm install react-bootstrap-table2-paginator --save --legacy-peer-deps

npm install react-bootstrap-table2-editor --save --legacy-peer-deps

npm install react-icons --save --force

npm install express express-rate-limit

npm install dotenv
</pre>
-> Replace the src folder with the uploaded src directory<br>

## Step 3: Set up the backend server
-> Add Backend/server.js to the root folder<br>
-> In the server.js file make the following changes:<br>
In Line 2: Replace username, password of CouchDB database with your own, in the format: http://username:password@localhost:5984 <br>
In Line 7: Replace database name with your own pre-exisiting database name: const dbName = 'database-name'; <br>

<img width="183" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/70429f8f-4ce6-4136-8077-b518402fbeda">


## Step 4: Execution
-> Split the terminal in the code editor (one for backend, one for frontend) 
<pre>
     cd folder-name
     cd app-name
</pre>
-> To execute the backend:
<pre>
    cd Backend
    node server.js
</pre>
->To execute the front end: 
<pre>
    npm start
</pre>

## Step 5: Login credentials
Username: Shloka
Password: password





