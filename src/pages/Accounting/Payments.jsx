"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const PaymentsPage=()=> {
    /* ---------- Form State ---------- */
    const emptyPayment = {
        client: "",
        amount: "",
        description: "",
        paymentMode: "",
        paymentType: "",
        date: "",
        invoice: "",
    };

    const [payment, setPayment] = useState(emptyPayment);
    const [payments, setPayments] = useState([]);

    const handleChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!payment.client || !payment.amount) return;
        setPayments([...payments, payment]);
        setPayment(emptyPayment);
    };

    const handleReset = () => setPayment(emptyPayment);

    /* ---------- DataTable Config ---------- */
    const DataTableOptions = {
        columns: [
            { title: "Client" },
            { title: "Amount" },
            { title: "Description" },
            { title: "Payment Mode" },
            { title: "Payment Type" },
            { title: "Date" },
            { title: "Invoices" },
            { title: "Action" },
        ],
        data: payments.map((item, index) => [
            item.client,
            item.amount,
            item.description,
            item.paymentMode,
            item.paymentType,
            item.date,
            item.invoice,
            "Delete", // simple text so DataTable renders correctly
        ]),
    };

    return (
        <Row>
            <Col sm="12">
                <Card>
                    {/* ===== Header ===== */}
                    <Card.Header className="text-center">
                        <h5 className="mb-0">Payment Details</h5>
                    </Card.Header>

                    <Card.Body>
                        <Row>
                            {/* ========== LEFT : FORM ========== */}
                            <Col md={6}>
                                <Form>
                                    <Row className="g-2">
                                        <Col md={6}>
                                            <Form.Label>Client</Form.Label>
                                            <Form.Control
                                                name="client"
                                                value={payment.client}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control
                                                name="amount"
                                                value={payment.amount}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <Form.Label>Payment Type</Form.Label>
                                            <Form.Select
                                                name="paymentType"
                                                value={payment.paymentType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Payment Type</option>
                                                <option value="Advance">Advance</option>
                                                <option value="Invoice">Invoice</option>
                                                <option value="Partial">Partial</option>
                                                <option value="Full">Full</option>
                                            </Form.Select>
                                        </Col>


                                        <Col md={6}>
                                            <Form.Label>Payment Mode</Form.Label>
                                            <Form.Select
                                                name="paymentMode"
                                                value={payment.paymentMode}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Payment Mode</option>
                                                <option value="Cash">Cash</option>
                                                <option value="Cheque">Cheque</option>
                                                <option value="UPI">UPI</option>
                                                <option value="Bank Transfer">Bank Transfer</option>
                                                <option value="Card">Card</option>
                                            </Form.Select>
                                        </Col>


                                        <Col md={6}>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="date"
                                                value={payment.date}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <Form.Label>Invoice</Form.Label>
                                            <Form.Control
                                                name="invoice"
                                                value={payment.invoice}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                name="description"
                                                value={payment.description}
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
                            <Col md={6}>
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
}
PaymentsPage.layout = "Accounting";
export default PaymentsPage;

