import { useState } from "react"
import Button from "./Button"

function FormAddFriend({showAddFriend,onAddFriend}) {
    var [name, setName] = useState("");
    var [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(event) {
        event.preventDefault();

        if(!name || !image) return;
        var id = crypto.randomUUID()
        var newFriends = {
            id,
            name,
            image:`${image}?id=${id}`,
            balance:0,
        };

        setName("");
        onAddFriend(newFriends);
    }

    return (
        <div>
        {showAddFriend && 
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label>🧑‍🦱 Friend Name</label>
                <input type="text" 
                value={name}
                onChange={(event) => setName(event.target.value) }
                />

                <label>📷 Image URL</label>
                <input type="text" 
                value={image}
                onChange={(event) => setImage(event.target.value)}
                />

                <Button>Add</Button>
            </form>
        }
        </div>
    )
}

export default FormAddFriend
