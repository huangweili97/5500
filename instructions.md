
# **Instruction**

This document provides step-by-step instructions to set up and run the `bank-demo` project, including testing its functionalities.

---

## **Prerequisites**
Before running the project, ensure the following software is installed on your machine:
- **Node.js** (v16 or later)
- **npm** (Node Package Manager)
- **TypeScript** (installed globally or locally)

To check if Node.js and npm are installed, run:

node -v
npm -v


## **Setup Instructions**
Clone the repository to your local machine:
git clone https://github.com/CSE-316-Software-Development/learn-user-stories.git



## **Run Tests**
To execute the test suite, use the following command:

npx ts-node bank-demo/tests/bankTests.ts

This will run the test cases located in the `tests/bankTests.ts` file and output the results to the console.

---

## **Test Scenarios**
The tests cover the following scenarios for account creation, deposit, withdrawal, and balance checking:

### **Account Creation**
1. Successful account creation.
2. Unsuccessful account creation due to age being under 18.
3. Unsuccessful account creation due to invalid username.

### **Deposit Money**
1. Successful deposit into an account.
2. Unsuccessful deposit due to invalid account ID.
3. Unsuccessful deposit due to invalid amount (e.g., negative or zero).

### **Withdraw Money**
1. Successful withdrawal from an account.
2. Unsuccessful withdrawal due to insufficient funds.
3. Unsuccessful withdrawal due to invalid account ID.
4. Unsuccessful withdrawal due to invalid amount (e.g., negative or zero).

### **Check Balance**
1. Successful balance check for a valid account.
2. Unsuccessful balance check due to invalid account ID.






