import Table from 'react-bootstrap/Table';
import People from './dataCall';

function Tablebody(){
    return(
        <Table striped bordered hover variant="dark">
          <People />
        </Table>
    );
}
export default Tablebody;