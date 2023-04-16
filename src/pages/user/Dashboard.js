import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import two from "../../images/two.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Dashboard(){
    const [auth, setAuth] = useAuth();

    const [score, setScore] = useState(0);

    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API}/dashboard/user`);
                setScore(res.data.score);
            }
            catch(err){
                console.log(err);
            }
        })()
    }, []);

    const navigate = useNavigate();
    return (
        <div>
            <Jumbotron title={`Hello ${auth?.user?.username}`} subTitle="Dashboard" />
            <div className="row">
                <div className="col-md-7 mt-2">
                    <img src={two} alt="one" className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h2 className="p-3 mt-2 mb-2 h4 bg-info-subtle text-center">Instructions</h2>
                    <h5 className="m-3">
                        <ul>
                            <li>
                                You will be given 6 questions.
                            </li>
                            <hr/>
                            <li>
                                You can only get to next question if you answer the previous question correctly.
                            </li>
                            <hr/>
                            <li>
                                To answer each question you will be given a clue from which you have to find the answer.
                            </li>
                            <hr/>
                            <li>
                                Be careful to not give wrong answers as you will be penalized.<br/> 
                                <b>Some answers may lead to dead-ends from which you cannot be escaped and cannot attempt all next questions</b>
                            </li>
                            <hr/>
                            <li>
                                From the time you start the game, your time will be recorded and you will be given a rank based on your time and accuracy.
                            </li>
                            <hr />
                        </ul>
                        <h5 style={{marginLeft: "34%"}}><b>Best of Luck!!</b></h5>
                        <button 
                            className="btn btn-warning btn-lg mt-2"
                            style={{marginLeft: "32%"}}
                            onClick = { e => (
                                e.preventDefault(),
                                (async () => {
                                    try{
                                        const que = score + 1;
                                        if (que === 7){
                                            navigate("/dashboard/user");
                                        }
                                        else {
                                            navigate(`/dashboard/que${que}`);
                                        }
                                    }
                                    catch(err){
                                        console.log(err);
                                    }
                                })()
                            )}
                        >
                            {score === 0 ? "Start Game" : score===6 ? "See Results  " : "Continue Game"}
                        </button>
                    </h5>
                </div>
            </div>
        </div>
    )
}