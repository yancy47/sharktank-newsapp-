import Form from "../components/Form";
function About() {

    return (
        <div className="Author">
       <div> <img src="https://k001.it/wp-content/uploads/2020/11/team_k001_872x582.gif" alt = 'teamimage'/>
       </div>
        <h3>Students who Contribute to NewsWebsite Project</h3>
            <ul>
                <li>LaStar Stewart</li>
                <li>Yancy Martinez</li>
                <li>Dana Seidakhmetova</li>
                <li>Brindha Rajeswari</li>
                <li>Ken Tang</li>
            </ul>
            <p>"Questions or comments:" </p>
            <Form/>
        </div>
    )
}
export default About;