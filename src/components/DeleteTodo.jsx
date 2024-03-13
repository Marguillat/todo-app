import { FaDeleteLeft } from "react-icons/fa6";
import {Button} from "@nextui-org/react";
function DeleteTodo({id,onDeletion}){
    const handleDelete = ( event )=>{
        if(onDeletion) onDeletion(id)
    }
    return (
        <Button
            onPress={handleDelete}
            isIconOnly
            color="danger"
            aria-label="Delete">
            <FaDeleteLeft
                color="danger"
                className="w-10"
            />
        </Button>
    )
}

export default DeleteTodo