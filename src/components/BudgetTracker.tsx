import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

export default function BudgetTracker() {

    const {state,totalExpenses,remainingBudget} = useBudget()
    
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={50}
                    styles={buildStyles({
                        pathColor: "#3B82F6",
                        trailColor: "#F5F5F5"
                    })}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-700 w-full p-2 text-white 
                                uppercase font-bold rounded-lg hover:bg-pink-800"
                >
                    Resetear App</button>

                <div className="flex flex-col gap-y-2">
                    <AmountDisplay
                label="Presupuesto"
                amount={state.budget}
                />
                <AmountDisplay
                    label="Disponible"
                    amount={remainingBudget}
                />
                <AmountDisplay
                    label="Gastado"
                    amount={totalExpenses}
                />
                </div>
                
            </div>
     
        </div>
    )
}
