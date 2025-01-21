import { Bank } from '../src/bank';

const accounts = [{ id: 1234567890, balance: 5000 }, { id: 1234567891, balance: 10000 }];
const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// === Account Creation Tests ===
// Scenario 1: Successful account creation
try {
    const acc = bank.createAccount('user1', 20, 1234567892);
    if (acc.id !== 1234567892 || acc.balance !== 0 || acc.id.toString().length !== 10) {
        console.log('Create Test 1 failed');
    } else {
        console.log('Create Test 1 passed');
    }
} catch (e) {
    if (e instanceof Error) {
        console.log('Create Test 1 failed:', e.message);
    } else {
        console.log('Create Test 1 failed: Unknown error occurred');
    }
}

// Scenario 2: Unsuccessful account creation due to age < 18
try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Create Test 2 failed');
} catch (e) {
    if (e instanceof Error && e.message === 'User is under 18') {
        console.log('Create Test 2 passed');
    } else if (e instanceof Error) {
        console.log('Create Test 2 failed:', e.message);
    } else {
        console.log('Create Test 2 failed: Unknown error occurred');
    }
}

// Scenario 3: Unsuccessful account creation due to invalid username
try {
    bank.createAccount('invalid_user', 20, 1234567893);
    console.log('Create Test 3 failed');
} catch (e) {
    if (e instanceof Error && e.message === 'Invalid username') {
        console.log('Create Test 3 passed');
    } else if (e instanceof Error) {
        console.log('Create Test 3 failed:', e.message);
    } else {
        console.log('Create Test 3 failed: Unknown error occurred');
    }
}

// === Deposit Money Tests ===
// Scenario 1: Successful deposit
try {
    const balance = bank.deposit(1234567890, 2000);
    console.log('Deposit Test 1 Passed:', balance === 7000);
} catch (e) {
    console.log('Deposit Test 1 Failed:', e instanceof Error ? e.message : 'Unknown error');
}

// Scenario 2: Unsuccessful deposit due to invalid account ID
try {
    bank.deposit(9999999999, 500);
    console.log('Deposit Test 2 Failed');
} catch (e) {
    console.log('Deposit Test 2 Passed:', e instanceof Error ? e.message : 'Unknown error');
}

// Scenario 3: Unsuccessful deposit due to invalid amount
try {
    bank.deposit(1234567890, -500);
    console.log('Deposit Test 3 Failed');
} catch (e) {
    console.log('Deposit Test 3 Passed:', e instanceof Error ? e.message : 'Unknown error');
}

// === Withdraw Money Tests ===
// Scenario 1: Successful withdrawal
try {
    const balance = bank.withdraw(1234567890, 1000);
    console.log('Withdrawal Test 1 Passed:', balance === 6000);
} catch (e) {
    console.log('Withdrawal Test 1 Failed:', e instanceof Error ? e.message : 'Unknown error');
}

// // Scenario 2: Unsuccessful withdrawal due to insufficient funds
// try {
//     bank.withdraw(1234567890, 6000);

//     console.log('Withdrawal Test 2 Failed');
// } catch (e) {
//     console.log('Withdrawal Test 2 Passed:', e instanceof Error ? e.message : 'Unknown error');
// }

// Scenario 2: Unsuccessful withdrawal due to insufficient funds
try {
    const accountId = 1234567890;
    const withdrawalAmount = 7000;

    // Attempt to withdraw more than the available balance
    bank.withdraw(accountId, withdrawalAmount);

    console.log('Withdrawal Test 2 Failed');
    const account = bank.checkBalance(accountId);
    console.log(`Debug Info: Account Balance = ${account}`); // Print current balance
} catch (e) {
    const accountId = 1234567890;
    const account = bank.checkBalance(accountId); // Get current balance for debugging
    console.log(`Withdrawal Test 2 Passed: ${e instanceof Error ? e.message : 'Unknown error'}`);
    console.log(`Debug Info: Account Balance = ${account}`); // Print current balance
}


// Scenario 3: Unsuccessful withdrawal due to invalid account ID
try {
    bank.withdraw(9999999999, 500);
    console.log('Withdrawal Test 3 Failed');
} catch (e) {
    console.log('Withdrawal Test 3 Passed:', e instanceof Error ? e.message : 'Unknown error');
}

// Scenario 4: Unsuccessful withdrawal due to invalid amount
try {
    bank.withdraw(1234567890, -100);
    console.log('Withdrawal Test 4 Failed');
} catch (e) {
    console.log('Withdrawal Test 4 Passed:', e instanceof Error ? e.message : 'Unknown error');
}

// === Check Balance Tests ===
// Scenario 1: Successful balance check
try {
    const balance = bank.checkBalance(1234567891);
    console.log('Balance Check Test 1 Passed:', balance === 10000);
} catch (e) {
    console.log('Balance Check Test 1 Failed:', e instanceof Error ? e.message : 'Unknown error');
}

// Scenario 2: Unsuccessful balance check due to invalid account ID
try {
    bank.checkBalance(9999999999);
    console.log('Balance Check Test 2 Failed');
} catch (e) {
    console.log('Balance Check Test 2 Passed:', e instanceof Error ? e.message : 'Unknown error');
}
