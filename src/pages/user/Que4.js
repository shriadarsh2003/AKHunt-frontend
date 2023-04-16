import Jumbotron from "../../components/cards/Jumbotron";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Que4(){

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const answer = e.target[0].value;
        // console.log(e.target[0].value);
        try{

            if (answer === ""){
                return toast.error("Answer is required");
            }
            const res = await axios.post(`${process.env.REACT_APP_API}/que4`, {
                answer: answer,
            });
            console.log(res);
            if (res.data === "correct"){
                toast.success("Correct Answer");
                navigate("/dashboard/que5");
            }
            else {
                toast.error("Wrong Answer");
                // window.location.reload();
                // setTimeout(function(){ window.location.reload(); }, 1000);
            }
        }
        catch(err){
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <Jumbotron title="Question 4" subTitle="Web Exploitation." />
            <div className="container-fluid jumbotron">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="p-3 mt-3 mb-2 h4 bg-info text-center ">Problem Statement</h2>
                        <h4 className="mt-4 bg-dark p-5">
                            45 years older Alice uses Codage products for his skin care.<br/>
                            Can you find the product in the given buttons or are they <b>seem to be dead-lock??</b>
                            <hr/>
                            <Link to="https://shh2353.github.io/Buttons/" target="_blank"
                                style={{textDecoration: "none", color: "white", fontWeight: "bold", marginLeft: "40%"}}
                            >
                                BUTTONS
                            </Link>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hints
                                </button>
                                <ul class="dropdown-menu">
                                    <li className="dropdown-item">1. Use Meta-data.</li>
                                    <li className="dropdown-item">2. Use Codage Base45 to decode the key hidden in the HTML Page.</li>
                                </ul>
                            </div>
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