import axios from "axios";
import React,{useEffect} from "react";

const People = () => {
    useEffect(()=>{getPeople();}, []);

    const [people, setPeople] = React.useState();

    const getPeople = () => {
        axios
            .get(`http://express-api.test:32002/people`).then((res) => {
                setPeople(res.data);
                console.log(people);
            })
            .catch((err) => console.error(err));
    };

    return(
        <thead>
            {people.map((people) => (
                <tr key={people.id}>
                    <th>
                        Name:{people.first_name},{people.last_name}
                    </th>
                    <th>
                        Email:{people.email}
                    </th>
                    <th>
                        Age: {people.age}
                    </th>
                </tr>
            ))}
        </thead>
    );
};


       
export default People;
