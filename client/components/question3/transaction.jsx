export const Transaction = ({ transaction }) => {
  return (
    <>
      <div className="flex-col m-4 border-2 rounded-md">
        <div className="ml-1">From: {transaction.fromUser.name}</div>
        <div className="ml-1">To: {transaction.toUser.name}</div>
        <div className="text-center text-green-500">{transaction.amount}</div>
      </div>
    </>
  );
};
