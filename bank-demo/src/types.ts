/**
 * Represents a single bank account.
 * 
 * @property id - A unique 10-digit number identifying the account.
 * @property balance - The current balance of the account.
 */
export type AccountType = {
    id: number;       // Unique 10-digit account number
    balance: number;  // Current account balance
};

/**
 * Represents the main interface for a Bank system.
 * It defines the required operations that any implementing class must provide.
 */
export interface BankType {
    /**
     * Creates a new bank account for a user.
     * 
     * @param username - The username of the account owner (must be verified).
     * @param age - The age of the account owner (must be at least 18).
     * @param accountNumber - A unique 10-digit account number for the new account.
     * @returns The newly created account object.
     * @throws Error if:
     *         - The username is invalid.
     *         - The age is below 18.
     *         - The account number is invalid.
     *         - An account with the given account number already exists.
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType;
}
