import Jumbotron from "../../components/cards/Jumbotron";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Que8(){

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const answer = e.target[0].value;
        // console.log(e.target[0].value);
        try{

            if (answer === ""){
                return toast.error("Answer is required");
            }
            const res = await axios.post(`${process.env.REACT_APP_API}/que8`, {
                answer: answer,
            });
            console.log(res);
            if (res.data === "correct"){
                toast.success("Congrats!. You have completed the challenge. Redirecting to result page...")
                setTimeout(function () {
                    navigate("/dashboard/user");
                }, 5000);
            }
            else {
                toast.error("Wrong Answer");
                // window.location.reload();
                setTimeout(function(){ window.location.reload(); }, 1000);
            }
        }
        catch(err){
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <Jumbotron title="Question 7" subTitle="Find the number." />
            <div className="container-fluid jumbotron">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="p-3 mt-3 mb-2 h4 bg-info text-center ">Problem Statement</h2>
                        <h4 className="mt-4 bg-dark p-5">
                            You are given a string "88888888".<br/>
                            You have to insert '+' at valid positions in the string to make the sum 1000.<br/>
                            <hr/>
                            <b>How many numbers of '+' character will you have to use??</b>
                        </h4>
                    </div>
                    <div className="col-md-6">
                        <h2 className="p-3 mt-3 mb-2 h4 bg-warning text-center ">Solution</h2>
                        <form className="" onSubmit={handleSubmit}>
                            <div className="form-group mt-4">
                                <textarea
                                    className="form-control"
                                    type="text"
                                    rows={11}
                                    style={{borderRadius: "0px"}}
                                    placeholder="Enter your answer here"
                                />
                            </div>
                            <button className="btn btn-primary btn-lg mt-4" style={{marginLeft: "40%"}}>Submit</button>
                        </form>
                    </div>  
                </div>
            </div>
        </>

    );
}