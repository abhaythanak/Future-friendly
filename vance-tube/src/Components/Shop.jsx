import { useDispatch } from "react-redux"
// import { bindActionCreators } from "redux";
import { actionCreator } from "../state/index";


export default function Shop() {
    const dispatch = useDispatch();
    return (
        <div className="content-center text-center">
            <h2 className="mb-9">deposite withdraw money</h2>
            <button className=" bg-slate-600 rounded-md w-10 " onClick={()=>dispatch(actionCreator.withdrawMoney(100))}>-</button>
            update balance
            <button className=" bg-slate-600 rounded-md w-10" onClick={()=>dispatch(actionCreator.depositMoney(100))}>+</button>
        </div>
    )
};
