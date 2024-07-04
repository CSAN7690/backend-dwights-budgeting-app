# Dwight's Budgeting App [BackEnd]

## Project Description
It's been a successful year as regional manager, but Oscar has already won a seat as state senator and is no longer on the financial team. Angela is on Dwight's case about keeping things on budget for a party he wants to plan for the Office, including inviting people like Kevin, Jim, Pam, etc. Dwight must carefully manage the expenses and transactions to ensure the party is a success without overspending.

Dwight has enlisted the help of Jim to handle the party planning, Kevin for catering, and Angela for decorations. As the head of the office, Dwight wants to make sure every transaction is tracked and categorized properly.

![The Office](https://seeklogo.com/images/T/the-office-tv-show-sign-logo-D347B2D8A4-seeklogo.com.png)

## Links

- [Back-end GitHub Repository](https://github.com/CSAN7690/backend-dwights-budgeting-app)
- [Front-end GitHub Repository]()
- [Deployed Back-end URL](https://backend-dwights-budgeting-app.onrender.com)
- [Deployed Front-end URL]()
- [Trello Board](https://trello.com/b/ubHXeUNH/dwights-budgeting-app-backend)

## API Endpoints

### Transactions

- `GET /transactions` - Get a list of all transactions
- `GET /transactions/:id` - Get a single transaction by ID
- `POST /transactions` - Create a new transaction
- `PUT /transactions/:id` - Update a transaction by ID
- `DELETE /transactions/:id` - Delete a transaction by ID

### Example Transactions

- **Catering from Kevin**
  - Amount: 200
  - Date: 2024-07-01
  - From: Kevin Malone
  - Category: Food

- **Decorations from Angela**
  - Amount: 150
  - Date: 2024-07-02
  - From: Angela Martin
  - Category: Decorations

- **Party planning from Jim**
  - Amount: 300
  - Date: 2024-07-03
  - From: Jim Halpert
  - Category: Planning

## Testing the API with Postman

### Setup Postman

1. **Download and Install Postman:**
   - [Download Postman](https://www.postman.com/downloads/)

2. **Open Postman and Create a New Request:**
   - Click on `+ New` in the top left corner and select `Request`.
   - Name your request (e.g., "Get All Transactions").

### Testing Endpoints

1. **GET /transactions** - Get a list of all transactions:
   - Method: GET
   - URL: `http://localhost:3000/transactions`
   - Click `Send` to see the response.

2. **GET /transactions/:id** - Get a single transaction by ID:
   - Method: GET
   - URL: `http://localhost:3000/transactions/1`
   - Click `Send` to see the response.

3. **POST /transactions** - Create a new transaction:
   - Method: POST
   - URL: `http://localhost:3000/transactions`
   - Go to the `Body` tab, select `raw`, and choose `JSON` as the format.
   - Add the following JSON data:
     ```json
     {
       "item_name": "Snacks for party",
       "amount": 50,
       "date": "2024-07-05",
       "from": "Pam Beesly",
       "category": "Food"
     }
     ```
   - Click `Send` to create the new transaction.

4. **PUT /transactions/:id** - Update a transaction by ID:
   - Method: PUT
   - URL: `http://localhost:3000/transactions/1`
   - Go to the `Body` tab, select `raw`, and choose `JSON` as the format.
   - Add the following JSON data:
     ```json
     {
       "item_name": "Updated Catering from Kevin",
       "amount": 250,
       "date": "2024-07-01",
       "from": "Kevin Malone",
       "category": "Food"
     }
     ```
   - Click `Send` to update the transaction.

5. **DELETE /transactions/:id** - Delete a transaction by ID:
   - Method: DELETE
   - URL: `http://localhost:3000/transactions/1`
   - Click `Send` to delete the transaction.

With these instructions, you can easily test the API endpoints using Postman.

## Image Attribution
The Office logo is sourced from [seeklogo.com](https://seeklogo.com/images/T/the-office-tv-show-sign-logo-D347B2D8A4-seeklogo.com.png).
