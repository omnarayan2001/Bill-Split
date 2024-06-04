import Button from "./Button.js";

function Friend({friend, onSelection, selectedFriend}) {
    var isSelected = selectedFriend?.id === friend.id; // this is called as optional channing
    return (
        <div>
             <li className={isSelected ?  "selected" : ""}>

                <img src={friend.image} alt={friend.name}/>
                <h3>{friend.name}</h3>
                {friend.balance < 0 ? <p className="red">Your owe {friend.name}  ${Math.abs(friend.balance)}</p> : friend.balance > 0 ? <p className="green">{friend.name} owes you  ${friend.balance}</p> :  <p>You and {friend.name} are even</p>}
                <Button onClick={()=> onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button> {/* using a callback function here because if we dont then onSelection function 
                                                                                 will be called immidiately and we only want to call the function when the click happens
                                                                            */}
            </li>
        </div>
    )
}

export default Friend;


// I was having some trouble too, but I think it was because I was passing the props for the showAddFriend state like this:

// <Button onShowAddFriend={handleShowAddFriend}>
//   {showAddFriend ? "Close" : "Add Friend"}
// </Button>
// and my actual Button component looked like this:

// function Button({ children, onShowAddFriend }) {
//   return (
//     <button className="button" onClick={onShowAddFriend}>
//       {children}
//     </button>
//   );
// }
// I think the best way is to pass down as a prop your own "onClick", so it's as generic as possible, and that the Button component will always react to onClick. Not sure if that's making any sense because I'm just trying to talk through it in order to understand better lol. But I passed down in both separate buttons like this:

// <Button onClick={handleShowAddFriend}>
//   {showAddFriend ? "Close" : "Add Friend"}
// </Button>
// <Button onClick={() => onSelection(friend)}>Select</Button>
// Those are the 2 separate buttons with both props named onClick. And then my Button component looked like this:

// function Button({ children, onClick }) {
//   return (
//     <button className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// }
// That way the generic onClick will always respond to the correct event.