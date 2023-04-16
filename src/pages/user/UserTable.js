import Jumbotron from "../../components/cards/Jumbotron";

export default function UserTable({users}){

    users.sort((a, b) => {
        if (a.score == b.score){
            const accuracyA = (a.total_attempted - a.wrong_attempted)/a.total_attempted;
            const accuracyB = (b.total_attempted - b.wrong_attempted)/b.total_attempted;
            return accuracyB - accuracyA;
        }
        return b.score - a.score;
    });

    return (
        <>
            <Jumbotron title="Leaderboard" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        {/* <h4 className="p-3 mt-2 mb-2 bg-light text-center fw-bold">
                            Leaderboard
                        </h4> */}
                        <div className="border shadow text-center bg-info rounded-4 mb-5 fw-bold">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"><i>Rank</i></th>
                                        <th><i>Username</i></th>
                                        <th><i>Score</i></th>
                                        <th><i>Total Attempt</i></th>
                                        <th><i>Correct Attempt</i></th>
                                        <th><i>Accuracy</i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index)    => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.username}</td>
                                            <td>{user.score}</td>
                                            <td>{user.total_attempted}</td>
                                            <td>{user.total_attempted - user.wrong_attempted}</td>
                                            <td>{ user.total_attempted===0? '0.00' :(((user.total_attempted-user.wrong_attempted)/user.total_attempted).toFixed(4))*100}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}