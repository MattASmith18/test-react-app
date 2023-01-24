import axios from "axios";
import React,{useEffect} from "react";

//Post = PeoplePost
//getPost = getPeople
const PeoplePost = () => {

    useEffect(()=>{
        getPeople();
    }, []);

    //peoples = posts & setPeople = setPosts
    const [peoples, setPeople] = React.useState([]);

    const getPeople = () => {
        console.log("hi before request");
        axios
            .get("http://api.test/people")
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
