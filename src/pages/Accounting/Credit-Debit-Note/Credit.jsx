"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";
const CreditNotePage = () =>  {
    /* ---------------- Filters ---------------- */
    const [filters, setFilters] = useState({
        client: "",
        invoice: "",
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    /* ---------------- Credit Note Data ---------------- */
    const creditNotes = [
        {
            creditNoteNo: "CN-1001",
            client: "Airi Satou",
            invoiceNo: "INV-9001",
            created: "2024-01-10",
        },
        {
            creditNoteNo: "CN-1002",
            client: "Angelica Ramos",
            invoiceNo: "INV-9002",
            created: "2024-01-12",
        },
        {
            creditNoteNo: "CN-1003",
            client: "Bradley Greer",
            invoiceNo: "INV-9003",
            created: "2024-01-15",
        },
    ];

    /* ---------------- DataTable Config ---------------- */
    const DataTableOptions = {
        columns: [
            { title: "Sno." },
            { title: "Credit Note No" },
            { title: "Client Details" },
            { title: "Invoice No" },
            { title: "Created" },
            { title: "Action" },
        ],
        data: creditNotes.map((item, index) => [
            index + 1,
            item.creditNoteNo,
            item.client,
            item.invoiceNo,
            item.created,
            `<button class="btn btn-sm btn-success" data-id="${item.creditNoteNo}">
     View
   </button>`,
        ]),
    };

    return (
        <Row>
            <Col sm="12">
                <Card>
                    {/* ================= Header / Search ================= */}
                    <Card.Header>
                        <Row className="align-items-end g-2">
                            <Col md={4}>
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Credit Note</h5>

                                </Card.Header>
                                <Form.Select
                                    name="client"
                                    value={filters.client}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Select Client</option>
                                    <option value="Airi Satou">Airi Satou</option>
                                    <option value="Angelica Ramos">Angelica Ramos</option>
                                    <option value="Bradley Greer">Bradley Greer</option>
                                </Form.Select>
                            </Col>

                            <Col md={4}>
                                {/* <Form.Label>Invoice</Form.Label> */}
                                <Form.Select
                                    name="invoice"
                                    value={filters.invoice}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Select Invoice</option>
                                    <option value="INV-9001">INV-9001</option>
                                    <option value="INV-9002">INV-9002</option>
                                    <option value="INV-9003">INV-9003</option>
                                </Form.Select>
                            </Col>

                            <Col md={4}>
                                <Button className="w-100 mt-2">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Card.Header>

                    {/* ================= DataTable ================= */}
                    <Card.Body>
                        <div className="table-responsive">
                            <DataTable
                                className="table-striped table-bordered"
                                columns={DataTableOptions.columns}
                                data={DataTableOptions.data}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
CreditNotePage.layout = "accounting";
export default CreditNotePage;