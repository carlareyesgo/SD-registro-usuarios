import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";

const List = ({ list, detailsPath }) => {
    const headers = list.length ? Object.keys(list[0]) : [];
    const navigate = useNavigate();


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    {headers.map((header) => <th key={header} style={{ textTransform: 'capitalize' }}>{header.replace('-', ' ')}</th>)}
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                {list.map((element, indexRow) => (
                    <tr key={indexRow}>
                        <td>{indexRow + 1}</td>
                        {headers.map((header, indexCol) => <td key={indexCol}>{element[header]}</td>)}
                        <td><Button variant="info" onClick={() => { navigate(detailsPath.replace(':id', indexRow)) }}>Detalles </Button></td>
                    </tr>
                )
                )}
            </tbody>
        </Table>
    )
};

export default List;