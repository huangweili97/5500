import { BankType, AccountType } from './types';

/**
 * This class implements a simple bank system to manage accounts and users.
 * It allows the creation of accounts for verified users, subject to certain rules.
 */
export class Bank implements BankType {
    private accounts: AccountType[] = []; // List of all accounts
    private usernames: string[] = []; // List of verified usernames

    /**
     * Initializes the bank with existing accounts and usernames.
     * @param accounts - Array of existing accounts.
     * @param usernames - Array of verified usernames.
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * Finds an account by its ID.
     * @param id - Unique 10-digit account number.
     * @returns The account if found, or undefined.
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    /**
     * Checks if the account number is valid.
     * @param accountNumber - Account number to validate.
     * @returns True if invalid, false otherwise.
     */
    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    /**
     * Checks if the username exists in the verified list.
     * @param username - Username to verify.
     * @returns True if the username exists, false otherwise.
     */
    private isUsernameExist(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * Creates a new account for a verified user.
     * @param username - The account owner's username.
     * @param age - The account owner's age (must be 18 or older).
     * @param accountNumber - Unique 10-digit account number.
     * @returns The newly created account object.
     * @throws Error if username is invalid, age is below 18, account number is invalid, or account already exists.
     */
    public createAccount(username: string, age: number, accountNumber: number): AccountType {
        if (!this.isUsernameExist(username)) {
            throw new Error('Invalid username');
        }
        if (age < 18) {
            throw new Error('User is under 18');
        }
        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if (this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        const account: AccountType = { id: accountNumber, balance: 0 };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposits money into an account.
     * @param accountId - ID of the account to deposit into.
     * @param amount - Positive amount to deposit.
     * @returns Updated account balance.
     * @throws Error if account ID is invalid or amount is not positive.
     */
    public deposit(accountId: number, amount: number): number {
        const account = this.findAccountById(accountId);
        if (!account) {
            throw new Error('Invalid account ID');
        }
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        account.balance += amount;
        return account.balance;
    }

    /**
     * Withdraws money from an account.
     * @param accountId - ID of the account to withdraw from.
     * @param amount - Positive amount to withdraw.
     * @returns Updated account balance.
     * @throws Error if account ID is invalid, amount is not positive, or insufficient balance.
     */
    public withdraw(accountId: number, amount: number): number {
        const account = this.findAccountById(accountId);
        if (!account) {
            throw new Error('Invalid account ID');
        }
        if (amount <= 0) {
            throw new Error('Invalid withdrawal amount');
        }
        if (amount > account.balance) {
            throw new Error('Insufficient balance');
        }
        account.balance -= amount;
        return account.balance;
    }

    /**
     * Checks the balance of an account.
     * @param accountId - ID of the account to check.
     * @returns Current account balance.
     * @throws Error if account ID is invalid.
     */
    public checkBalance(accountId: number): number {
        const account = this.findAccountById(accountId);
        if (!account) {
            throw new Error('Invalid account ID');
        }
        return account.balance;
    }
}
