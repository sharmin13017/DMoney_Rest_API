# DMoney Rest API Testing Project

Project Summery -
------------------------
DMoney is a demo financial related project where fake money can be transferred.Here I have Performed Integration and API Automation Testing of DMoney API Collection.

Testcase scenarios
---------------
1. Admin creates an Agent, 2 random Customers, and a Merchant.
2. Deposit some money from the SYSTEM account to the Agent. (range 10 TK to 10,000 TK)
3. Agent deposits money to one of the Customers.
4. Check the Agent's balance.
5. Then, send money from one Customer to another Customer.
6. Withdraw any amount from a Customer to the Agent (range 10 TK to 10,000 TK).
7. Check the Customer's balance and transaction statement by trnxId.
8. Make a payment from the second Customer to the Merchant.
9. The second Customer checks both balance and transaction statement.
10. The Merchant checks their balance.

How to run this project
---------------------
- clone this project
- Open with any code editor / Command Shell
- Give this following command npm i and node .\report.js

Technology used:
--------------
- Postman
- Newman

Documantation for the API Collection -
---------
https://documenter.getpostman.com/view/9682968/2sB2qgcxnZ

Test Cases For my Project -
-------------

Output -
---------
<img width="959" alt="newman report" src="https://github.com/user-attachments/assets/d7a245c4-6689-4ba1-8fb9-100f4ec790c7" />




