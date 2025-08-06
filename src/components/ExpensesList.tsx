import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail";



export default function ExpensesList() {
    const {state} = useBudget()

    const isEmpty = useMemo(() =>{
        return state.expenses.length === 0
    },[state.expenses]);

  return (
    <div className="mt-10">
        {isEmpty? <p className="text-gray-600 text-2xl">No Hay Gastos Registrados</p>:
            <>
                <p className="text-gray-600 text-2xl">Listado De Gastos: </p>
                {state.expenses.map(expense =>(
                    <ExpenseDetail
                        key={expense.id}
                        expense={expense}
                    />
                )    
                )}
            </>
        }

    </div>
  )
}
