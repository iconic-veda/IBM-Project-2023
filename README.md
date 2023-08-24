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

<img width="170" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/dddfeb36-8cd1-4dae-b169-d852b1d9d10b">

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
Initial webpage:<br> 
<img width="303" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/034615f2-bb7a-47f4-9514-75435be4d332"><br>

Entering value for creation of new document: <br>
<img width="324" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/b7216a62-e3d7-47a2-86e5-19aa9d820824"><br>

New document created in CouchDB: <br>
<img width="262" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/a6075cc9-2b54-4881-bf26-670a4c2482ce"><br>

Successfull fetching data from CouchDB:<br>
<img width="373" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/af0d0b23-b411-4473-8ece-d4a192f0f8ac"><br>

Successfull error generated for missing document from CouchDB:<br>
<img width="348" alt="image" src="https://github.com/iconic-veda/IBM-Project-2023/assets/115919025/aa06ebbb-7199-4506-8fdd-a77d077a248d"><br>





