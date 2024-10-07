import { useContext } from "react";
import Spinner from '../layouts/Spinner';
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
    const {users, isLoading} = useContext(GithubContext)

    if(!isLoading) {
        return (
            <div>
                <div className="mx-2 grid grid-cols-1 gap-8 xl:grip-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            </div>
        );
    } else {
        return <Spinner/>
    }
}

export default UserResults;