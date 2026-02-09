"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const DebitPage = () => {
  /* ---------------- Filters ---------------- */
  const [filters, setFilters] = useState({
    vendor: "",
    purchase: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  /* ---------------- Debit Note Data ---------------- */
  const emptyDebit = {
    debitNoteNo: "DN-2001",
    vendor: "ABC Pharma",
    purchaseNo: "PUR-5001",
    created: "2024-01-08",
  };

  const debitNotes = [
    emptyDebit,
    {
      debitNoteNo: "DN-2002",
      vendor: "Global Medicos",
      purchaseNo: "PUR-5002",
      created: "2024-01-12",
    },
    {
      debitNoteNo: "DN-2003",
      vendor: "HealthCare Supplies",
      purchaseNo: "PUR-5003",
      created: "2024-01-18",
    },
  ];

  /* ---------------- DataTable Config ---------------- */
  const DataTableOptions = {
    columns: [
      { title: "Sno." },
      { title: "Debit Note No" },
      { title: "Vendor Details" },
      { title: "Created" },
      { title: "Purchase No" },
      { title: "Action" },
    ],
    data: debitNotes.map((item, index) => [
      index + 1,
      item.debitNoteNo,
      item.vendor,
      item.created,
      item.purchaseNo,
       `<button class="btn btn-sm btn-success" data-id="${item.debitNoteNo}">
     View
   </button>`,
    ]),
  };

  return (
    <Row>
      <Col sm="12">
        <Card>
          {/* ================= Navbar ================= */}
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Debit Note</h5>
            
          </Card.Header>

          {/* ================= Filters ================= */}
          <Card.Body>
            <Row className="align-items-end g-2 mb-3">
              <Col md={4}>
                <Form.Select
                  name="vendor"
                  value={filters.vendor}
                  onChange={handleFilterChange}
                >
                  <option value="">Client</option>
                  <option value="ABC Pharma">ABC Pharma</option>
                  <option value="Global Medicos">Global Medicos</option>
                  <option value="HealthCare Supplies">
                    HealthCare Supplies
                  </option>
                </Form.Select>
              </Col>

              <Col md={4}>
                <Form.Select
                  name="purchase"
                  value={filters.purchase}
                  onChange={handleFilterChange}
                >
                  <option value=""> Purchase Invoice</option>
                  <option value="PUR-5001">PUR-5001</option>
                  <option value="PUR-5002">PUR-5002</option>
                  <option value="PUR-5003">PUR-5003</option>
                </Form.Select>
              </Col>

              <Col md={4}>
                <Button className="w-100 mt-2">
                  Search
                </Button>
              </Col>
            </Row>

            {/* ================= DataTable ================= */}
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
};

DebitPage.layout = "accounting";
export default DebitPage;