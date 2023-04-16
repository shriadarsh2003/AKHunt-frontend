import {useAuth} from "../../context/auth.js";
import axios from 'axios';
import {useState, useEffect} from 'react';
import Jumbotron from "../../components/cards/Jumbotron.js";

export default function Score() {
    // state
    const [score, setScore] = useState(0);
    const [total_attempted, setTotal_attempted] = useState(0);
    const [wrong_attempted, setWrong_attempted] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [start_time, setStart_time] = useState(0);
    const [end_time, setEnd_time] = useState(0);
    const [duration, setDuration] = useState(0);

    const getScore = async() => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API}/dashboard/user`);
            setScore(res.data.score);
            setTotal_attempted(res.data.total_attempted);
            setWrong_attempted(res.data.wrong_attempted);
            if (res.data.total_attempted === 0){
                setAccuracy(0);
            }
            else {
                const Accuracy = (res.data.total_attempted - res.data.wrong_attempted) / res.data.total_attempted;
                setAccuracy(Accuracy*100);
            }
            setStart_time(res.data.start_time);
            setEnd_time(res.data.end_time);
            const st = new Date(res.data.start_time);
            const et = new Date(res.data.end_time);
            const duration = (et-st)/100;
            setDuration(duration);
        }
        catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        getScore();
    }, []);

    // context
    const [auth, setAuth] = useAuth();

    return (
        <div>
            <Jumbotron title={auth?.user?.username} subTitle="Result" />
            {/* <div className="card text-center">
                <div class="card-header">
                    Featured
                </div>
            </div> */}
            <div class="card text-white bg-info mb-3 mt-3" style={{marginLeft: "20%", marginRight: "20%"}}>
                    <div class="card-body">
                        <div>
                            <h3>
                                <ul>
                                    <li>Your Score: {score}</li>
                                    <li>Total Attempt: {total_attempted}</li>
                                    <li>Correct Attempt: {total_attempted - wrong_attempted}</li>
                                    <li>Wrong Attempt: {wrong_attempted}</li>
                                    <li>Accuracy: {accuracy}%</li>
                                    <li>Duration: {duration} seconds</li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
    )
}