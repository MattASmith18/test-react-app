import Table from 'react-bootstrap/Table';
import dataCall from './dataCall';

function Tablebody(){
    return(
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th><h3>Name</h3></th>
              <th><h3>Email</h3></th>
              <th><h3>Age</h3></th>
            </tr>
            <tr>
              <th><h3></h3></th>
              <th><h3></h3></th>
              <th><h3></h3></th>
            </tr>
          </thead>
        </Table>
    );
}
export default Tablebody;