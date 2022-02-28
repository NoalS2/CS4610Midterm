import { useContext, useEffect, useState } from 'react';
import { Transaction } from './transaction';
import { ApiContext } from '../../utils/api_context';

export const Question3 = () => {
  const [transactions, setTransactions] = useState([]);

  const api = useContext(ApiContext);

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setTransactions(transactions);
  }, []);

  return (
    <div className="flex flex-wrap">
      {transactions.map((transaction) => {
        return (
          <div className="w-1/3" key={transaction.id}>
            <Transaction transaction={transaction} />
          </div>
        );
      })}
    </div>
  );
};
