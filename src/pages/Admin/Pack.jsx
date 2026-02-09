"use client";

import { useState } from "react";
import { Row, Col, Button, Form, Badge } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const PaymentsPage = () => {
    /* ---------- Form State ---------- */
    const emptyUser = {
        code: "",
    };

    const [user, setUser] = useState(emptyUser);
    const [users, setUsers] = useState([
        {
            code: "10 tab",
            
            status: "false",
            action:""
        },
    ]);

    /* ---------- Handlers ---------- */
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!user.code ) return;
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

    /* ---------- DataTable Config ---------- */
   /* ---------- DataTable Config ---------- */
const DataTableOptions = {
    columns: [
        { title: "Code" },
        { title: "Status" },
        { title: "Action" },
    ],
    data: users.map((item, index) => [
        item.code,
        item.status,
           `
  <button class="btn btn-sm btn-success me-1" data-id="${index}">
    Edit
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
                                <h5 className="mb-3 ">Pack Form</h5>

                                <Form>
                                    <Row className="g-2">
                                        <Col md={12}>
                                            <Form.Label>Code:</Form.Label>
                                            <Form.Control
                                                name="code"
                                                value={user.code}
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

PaymentsPage.layout = "admin";
export default PaymentsPage;
