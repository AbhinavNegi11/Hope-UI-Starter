"use client";

import { useState } from "react";
import { Row, Col, Button, Form, Badge } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const PaymentsPage = () => {
    /* ---------- Form State ---------- */
    const emptyUser = {
        email: "",
        permission: "",
    };

    const [user, setUser] = useState(emptyUser);
    const [users, setUsers] = useState([
        {
            email: "mishrajee@gmail.com",
            
            status: "false",
            action:""
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

    /* ---------- DataTable Config ---------- */
   /* ---------- DataTable Config ---------- */
const DataTableOptions = {
    columns: [
        { title: "Email" },
        { title: "Status" },
        { title: "Action" },
    ],
    data: users.map((item, index) => [
        item.email,
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
                                <h5 className="mb-3 ">User Form</h5>

                                <Form>
                                    <Row className="g-2">
                                        <Col md={12}>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                name="email"
                                                value={user.email}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Form.Label>Permission</Form.Label>
                                            <Form.Select
                                                name="permission"
                                                value={user.permission}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Permission</option>
                                                <option value="client">Client</option>
                                                <option value="payment">Payment</option>
                                                <option value="admin">Admin</option>
                                            </Form.Select>
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
