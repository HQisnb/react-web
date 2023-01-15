import { Link } from 'react-router-dom';

const Home = () => {

    const title = "Welcome, my friend!";

    const content = "This website is built with React, Javascript, HTML and CSS. It includes the personal information and the academic carrer that I want to share with everyone. Hope everybody enjoys it!";

    const sub1 = "Myself";

    const sub2 = "My Carrer";

    return ( 
        <div>
            <p>{ title }</p>

            <Link to="/myself" className="sub1">{ sub1 }</Link>
            <Link to="/carrer" className="sub2">{ sub2 }</Link>
        </div>
     );
}
 
export default Home;