import { useReducer, createContext, type ReactNode, useMemo } from "react"
import { budgetReducer,initialState, type BudgetActions, type Budgetstate} from "../reducers/BudgetReducer"

type BudgetContextProps = {
    state: Budgetstate ,
    dispatch : React.ActionDispatch<[action: BudgetActions]>,
    totalExpenses : number,
    remainingBudget : number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({children} : BudgetProviderProps) =>{

    const [state,dispatch] = useReducer(budgetReducer,initialState);

        
        const totalExpenses = useMemo(() =>{
            return state.expenses.reduce((total,expense) => expense.amount + total,0)
        },[state.expenses])
    
        const remainingBudget = state.budget - totalExpenses;
            
        

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget,
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}