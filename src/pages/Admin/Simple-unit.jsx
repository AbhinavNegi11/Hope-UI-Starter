"use client";

import { useState } from "react";
import { Row, Col, Button, Form, Badge } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const PaymentsPage = () => {
    /* ---------- Form State ---------- */
    const emptyUser = {
        name: "",
        symbol: "",
        noofdecimal: "",
    };

    const [user, setUser] = useState(emptyUser);
    const [users, setUsers] = useState([
        {
            name: "",
            symbol: "",
            noofdecimal: "",
            status: "",
            action: ""
        },
      
    ]);

    /* ---------- Handlers ---------- */
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!user.email || !user.permission) return;
        setUsers([...users, user]);
        setUser(emptyUser);
    };

    const handleReset = () => setUser(emptyUser);

    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setUser(users[index]);
        handleDelete(index);
    };

    const DataTableOptions = {
        columns: [
            { title: "name" },
            { title: "symbol" },
            { title: "noofdecimal" },
            { title: "status" },
            { title: "action" },
        ],
        data: users.map((item, index) => [
            item.name,
            item.symbol,
            item.noofdecimal,
            item.status,
            `
  <button class="btn btn-sm btn-success me-1" data-id="${index}">
    Edit
  </button>
  <button class="btn btn-sm btn-primary" data-id="${index}">
    Delete
  </button>
`
            ,
        ]),
    };


    return (
        <Row>
            <Col sm="12">
                <Card>
                    <Card.Body>
                        <Row>
                            {/* ========== LEFT : FORM ========== */}
                            <Col md={4}>
                                <h5 className="mb-3 ">SimpleUnit Form</h5>

                                <Form>
                                    <Row className="g-2">
                                        <Col md={12}>
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control
                                                name="name"
                                                value={user.name}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label>Symbol:</Form.Label>
                                            <Form.Control
                                                name="symbol"
                                                value={user.symbol}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        
                                        <Col md={12}>
                                            <Form.Label>No. of Decimal:</Form.Label>
                                            <Form.Control
                                                name="noofdecimal"
                                                value={user.noofdecimal}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>

                                    {/* Buttons */}
                                    <div className="mt-3 d-flex gap-2">
                                        <Button onClick={handleSubmit}>Submit</Button>
                                        <Button variant="secondary" onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                </Form>
                            </Col>

                            {/* ========== RIGHT : DATATABLE ========== */}
                            <Col md={8}>
                                <div className="table-responsive">
                                    <DataTable
                                        className="table-striped table-bordered"
                                        columns={DataTableOptions.columns}
                                        data={DataTableOptions.data}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default PaymentsPage;
