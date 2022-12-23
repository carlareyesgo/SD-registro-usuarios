import { Table } from "react-bootstrap";

const List = ({ list }) => {
    const headers = list.length ? Object.keys(list[0]) : [];

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
                {list.map((element, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {headers.map((header, index) => <td key={index}>{element[header]}</td>)}
                        <td>Info</td>
                    </tr>
                )
                )}
            </tbody>
        </Table>
    )
};

export default List;