// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const groupTransactionsByDate = (transactions: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return transactions.reduce<Record<string, any[]>>((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) acc[date] = [];
        acc[date].push(transaction);
        return acc;
    }, {});
};

