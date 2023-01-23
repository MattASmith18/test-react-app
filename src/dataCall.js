class dataCall {
    constructor() {

        // Constructor 
        constructor(props); {
            super(props);

            this.state = {
                items: [],
                DataisLoaded: false
            };
        };

        // ComponentDidMount is used to
        // execute the code 
        componentDidMount(); {
            fetch("https://express-api.test").then((res) => res.json()).then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            });
        }
        render(); {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded)
                return <div>
                    <h1> Error </h1> </div>;

            return (
                <div className="data"> {items.map((item) => (
                    <ol key={item.id}>
                        User_Name: {item.username},
                        Full_Name: {item.name},
                        User_Email: {item.email}
                    </ol>
                ))}
                </div>
            );
        };
    }
}
       
    export default dataCall;
