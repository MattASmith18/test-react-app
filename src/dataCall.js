import axios from "axios";
import React,{useEffect} from "react";

//Post = PeoplePost
//getPost = getPeople
const PeoplePost = () => {
    
    useEffect(()=>{
        getPeople();
    }, []);

    //peoples = posts & setPeople = setPosts
    const [peoples, setPeople] = React.useState();

    const getPeople = () => {
        axios
            .get(`http://api.test/people`)
            .then((res) => {
                setPeople(res.data);
                console.log(peoples);
            })
            .catch((err) => console.error(err));
    };

    getPeople();    

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
