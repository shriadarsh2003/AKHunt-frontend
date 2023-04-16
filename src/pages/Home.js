import Jumbotron from "../components/cards/Jumbotron.js";
import { useAuth } from "../context/auth.js";
import one from "../images/one.jpg";
import three from "../images/three.jpg"
import { useNavigate } from "react-router-dom";
export default function Home(){
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    return (
        <div className="row">
            <div className="col-md-5">
                <h2 className="p-3 mt-2 mb-2 h4 bg-info-subtle text-center">Welcome to AKHunt!!</h2>
                <h5 className="m-3">
                    AKHunt is a game in which you have clues to find hidden treasures.
                    <hr/>
                    The game typically begins with a clue or riddle that leads to the next clue, and so on until the final prize is found.
                    <hr />
                    It is a fun and engaging way to encourage teamwork, problem-solving, and critical thinking skills while also adding an element of excitement and adventure to any event. 
                    <hr/>
                    You only need an email to start the game. 
                    <hr />
                    So, what are you waiting for? <br/> <b>Register</b> for the game and start hunting for the treasure.
                    <hr />
                    { !auth?.user ? (
                        <>
                            <button 
                                className="btn btn-warning btn-lg mt-3"
                                style={{marginLeft: "30%"}} 
                                onClick = { e => {
                                    e.preventDefault();
                                    navigate("/register");
                                }}   
                            >
                                Register Now!!
                            </button>
                        </>
                    ): (
                        <>
                            <h5 style={{marginLeft: "25%"}}><b>You are registered!!</b></h5>
                            <button
                                className="btn btn-warning btn-lg mt-2"
                                style={{marginLeft: "25%"}} 
                                onClick = { e => {
                                    e.preventDefault();
                                    navigate(`/dashboard`);
                                }} 
                            >
                                Go to Dashboard
                            </button>
                        </>
                    )} 
                </h5>
            </div>
            <div className="col-md-7 mt-2">
                <img src={three} alt="one" className="img-fluid" />
            </div>
        </div>
    )
}