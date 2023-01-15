import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Visitor = () => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [rate, setRate] = useState('Love it');
    const [job, setJob] = useState('Other');

    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const visitor = { name, body, rate, job };

        fetch('http://localhost:8000/visitor/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visitor)
        }).then(() => {
            console.log('new visitor added');
            console.log(visitor);
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="make-visitor">
            <h2>You don't have to, but...</h2>
            <p>Wish you can leave some infomation about you!</p>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                type="text"
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                />
                <label>Suggestion for this website:</label>
                <textarea 
                required
                value={body} 
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Rate the website:</label>
                <select
                required 
                value={rate} 
                onChange={(e) => setRate(e.target.value)}>
                    <option value="Love it">Love it</option>
                    <option value="It's OK">It's OK</option>
                    <option value="Another :(">Another @_@</option>
                </select>
                <label>Are you...</label>
                <select
                value={job} 
                onChange={(e) => setJob(e.target.value)}>
                    <option value="friends">Friend</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="other">Other</option>
                </select>
                <button>Leave Footprint</button>
            </form>
        </div>
      );
}
 
export default Visitor;