// src/ExpenseList.js

import React, { useEffect, useState } from 'react';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch('http://127.0.0.1:5000/expenses');
      const data = await response.json();
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
