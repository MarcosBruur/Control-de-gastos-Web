import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpensesList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(() => {
    return filteredExpenses.length === 0;
  }, [state.expenses]);
  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl">No Hay Gastos Registrados</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl">Listado De Gastos: </p>
          {filteredExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
