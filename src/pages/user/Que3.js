import Jumbotron from "../../components/cards/Jumbotron";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Que3(){

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const answer = e.target[0].value;
        // console.log(e.target[0].value);
        try{

            if (answer === ""){
                return toast.error("Answer is required");
            }
            const res = await axios.post(`${process.env.REACT_APP_API}/que3`, {
                answer: answer,
            });
            console.log(res);
            if (res.data === "correct"){
                toast.success("Correct Answer");
                navigate("/dashboard/que4");
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
            <Jumbotron title="Question 3" subTitle="Know The Crypto" />
            <div className="container-fluid jumbotron">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="p-3 mt-3 mb-2 h4 bg-info text-center ">Problem Statement</h2>
                        <h4 className="mt-4 bg-dark p-5">
                            In wargames jumping between the Bases is quite a fun, right! <hr/>Why not try it here... <br/>
                            <Link 
                                style={{textDecoration: "none", color: "white", marginLeft: "40%"}}
                                to="https://res.cloudinary.com/djejaxsp7/raw/upload/v1681679865/code_qsf3fu.txt" target="_blank">Find Code</Link>
                            <hr/>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hints
                                </button>
                                <ul class="dropdown-menu">
                                    <li className="dropdown-item">1. Convert the code into base 32 and then into base 64.</li>
                                    <li className="dropdown-item">2. Didn't found flag?? Repeat the same process until you don't get the flag</li>
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