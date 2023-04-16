export default function Jumbotron({title, subTitle="Welcome to AKHunt"}){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center p-4 bg-light">
                    <h1>{title}</h1>
                    <p className="lead"><h3>{subTitle}</h3></p>
                </div>
            </div>
        </div>
    );
}