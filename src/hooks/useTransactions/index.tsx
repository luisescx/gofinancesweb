import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
};

export { useTransactions };
