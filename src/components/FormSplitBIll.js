import { useState } from "react";
import Button from "./Button";
function FormSplitBIll({selectedFriend, onHandleSplitBill}) {
    var [bill, setBill] = useState("");
    var [paidByUser, setPaidByUser] = useState("");
    var [whoIsPaying, setWhoisPaying] = useState("user");
    var friendExpense =  (bill ? bill - paidByUser : "");
    
    function handleSubmit(event) {
        event.preventDefault();

        if(!bill && !paidByUser) return;

        onHandleSplitBill(whoIsPaying === "user" ? friendExpense : -paidByUser)
    }
    return (
        <div>
            <form className="form-split-bill" onSubmit={handleSubmit}>
                <h2> split the bill with {selectedFriend.name}</h2>

                <label>💵 Bill Value</label>
                <input type="text" value={bill} onChange={(event)=> setBill(Number(event.target.value)) }/>

                <label>🧑Your expense</label>
                <input type="text" value={paidByUser} onChange={(event)=> setPaidByUser(Number(event.target.value) > bill ? paidByUser : Number(event.target.value)) } />

                <label>{selectedFriend.name}'s expense</label>
                <input type="text" disabled value={friendExpense}/>

                <label>🤑 who is paying the bill ?</label>
                <select value={whoIsPaying} onChange={(event)=> setWhoisPaying(event.target.value)}>
                    <option value="you">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
                <Button>Split Bill</Button>
            </form>
        </div>
    )
}

export default FormSplitBIll;
