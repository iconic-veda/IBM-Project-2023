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
</pre>
-> Replace the src folder with the uploaded src directory<br>

## Step 3: Set up the backend server
-> Add Backend/server.js to the root folder<br>
-> In the server.js file make the following changes:<br>
In Line 3: Replace username, password of CouchDB database with your own, in the format: http://username:password@localhost:5984 <br>
In Line 8: Replace database name with your own pre-exisiting database name: const dbName = 'database-name'; <br>

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

<br>
<img width="607" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/764019e7-1bbd-4354-ba24-becb7e1c73d7">

### Images for working reference:
Initial login page:<br> 
<img width="903" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/e3249491-b63b-4cc7-8de2-e63a44b8a8c1"><br>

Homepage: <br>
<img width="899" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/157a9a2f-a1aa-415a-a517-47972989f02b"><br>

BluePage SyncUp - data retrieved from couchdb and 5 fields editable as name of employee is entered: <br>
<img width="907" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/79337087-b045-46ec-9251-8479a7a5ce69"><br>

Editing data:<br>
<img width="907" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/d53e2b9e-3473-4f47-9e00-e604c22c5f9d"><br>






