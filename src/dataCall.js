import React,{useEffect} from "react"
import axios from "axios"
var cors = require('cors')

//Post = PeoplePost
//getPost = getPeople
const PeoplePost = () => {

    const Axios = axios.create({
        baseURL: `http://api.test/people`,
        withCredentials: true
    })

    useEffect(()=>{
        getPeople();
    }, []);

    //peoples = posts & setPeople = setPosts
    const [peoples, setPeople] = React.useState([]);

    const getPeople = () => {
        console.log("hi before request new");
        axios
            .get("http://api.test/people", {mode: 'cors'})
            .then((res) => { console.log("hi");
                console.log(res);
                setPeople(res.data.Employees);
                console.log(peoples);
            
            })
            .catch((err) => console.error(err));
    };
  
    return(
        <ul>
            {peoples.map((post) => (
                <li key = {post.id}>
                    Name: {post.first_name}, {post.last_name},
                    Email: {post.email},
                    Age: {post.age}
                    <hr />
                    <br />
                </li>
            ))}
        </ul>
    );
};


       
export default PeoplePost;
