# REST-API
Steps how the problem is solved:


1)Install Dependencies:
Make sure you have MongoDB installed and running on your local machine. Also, install the necessary dependencies by running the following commands:

2)Create Server File:
Modify the server.js file with the following code:

3)Start the Server:
Save the changes to server.js and start the server using the following command:

4)Test the Endpoints:
You can now test the API endpoints as before, using a web browser or cURL commands.

   ->To retrieve the bank list, open http://localhost:3000/banks in a web browser or send a GET request using cURL:
   ->To retrieve branch details for a specific bank and branch, open http://localhost:3000/banks/{bank_id}/branches/{branch_id} in a web browser, replacing {bank_id}      and {branch_id} with the actual identifiers, or send a GET request using cURL:
