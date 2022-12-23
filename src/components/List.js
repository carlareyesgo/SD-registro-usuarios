import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const List = ({ list, detailsPath, deleteHandler, show, showHandle, closeHandle }) => {
    const [userIndex, setUserIndex] = useState(-1);
    const headers = list.length ? Object.keys(list[0]) : [];
    const navigate = useNavigate();

    return (
        <>
            <Table responsive striped bordered hover className="text-center">
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
                            <td>
                                <Button className="me-3 mb-2" variant="info" onClick={() => { navigate(detailsPath.replace(':id', indexRow)) }}>Editar </Button>
                                <Button className="mb-2" variant="danger" onClick={() => {
                                    showHandle();
                                    setUserIndex(indexRow)
                                }}>Eliminar </Button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>

            <Modal show={show} onHide={closeHandle}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estas seguro que quieres eliminar a este usuario?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeHandle}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => { deleteHandler(userIndex) }}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default List;