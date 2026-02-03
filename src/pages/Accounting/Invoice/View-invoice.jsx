"use client";

import { useState } from "react";
import { Button, Badge, Table } from "react-bootstrap";
import Card from "@/components/bootstrap/card";

const viewInvoice=()=> {
  // Empty table initially
  const [data, setData] = useState([]);

  // Table column configuration
  const columns = [
    { title: "Bill No", data: "billNo" },
    { title: "Client Details", data: "client" },
    { title: "Created", data: "created" },
    {
      title: "Invoice Status",
      data: "status",
      render: (status) => (
        <Badge bg={status === "Paid" ? "success" : "warning"}>
          {status}
        </Badge>
      ),
    },
    {
      title: "Action",
      data: "action",
      render: () => (
        <Button size="sm" variant="outline-primary">
          View
        </Button>
      ),
    },
  ];

  // Demo create action (remove when backend is ready)
  const handleCreate = () => {
    setData([
      {
        billNo: "BILL-1001",
        client: "Apollo Pharmacy",
        created: "2024-01-12",
        status: "Paid",
      },
    ]);
  };

  return (
    <>
      {/* ===== Header ===== */}
      <Card className="mb-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">View Invoice</h5>

          <Button size="sm" onClick={handleCreate}>
            Create Invoice
          </Button>
        </Card.Body>
      </Card>

      {/* ===== Table ===== */}
      <Card>
        <Card.Body>
          <div className="table-responsive">
            <Table bordered size="sm" className="align-middle">
              {/* ===== TABLE HEADER (ALWAYS VISIBLE) ===== */}
              <thead>
                <tr>
                  {columns.map((col, index) => (
                    <th key={index}>{col.title}</th>
                  ))}
                </tr>
              </thead>

              {/* ===== TABLE BODY ===== */}
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="text-center text-muted"
                    >
                      No invoices found
                    </td>
                  </tr>
                ) : (
                  data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                          {col.render
                            ? col.render(row[col.data], row)
                            : row[col.data]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
viewInvoice.layout="Accounting"
export default viewInvoice 