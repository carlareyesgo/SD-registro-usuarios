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
                {list.map((element, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            {headers.map((header) => <td>{element[header]}</td>)}
                            <td>Info</td>
                        </tr>
                    )

                })}
            </tbody>
        </Table>
    )
};

export default List;