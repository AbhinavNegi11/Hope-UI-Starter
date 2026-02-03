"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

/* ---------- RANDOM DATA ---------- */
const employees = [
  { name: "Amit Sharma", code: "EMP001" },
  { name: "Neha Verma", code: "EMP002" },
  { name: "Rahul Singh", code: "EMP003" },
  { name: "Priya Patel", code: "EMP004" },
];

const randomDate = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date(2024, 11, 31);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .split("T")[0];
};

const generateRandomOfferData = () =>
  Array.from({ length: 5 }).map((_, index) => {
    const emp = employees[Math.floor(Math.random() * employees.length)];
    return {
      id: index + 1,
      name: emp.name,
      code: emp.code,
      offerDate: randomDate(),
    };
  });

const Salary=()=> {
  /* ---------- LEFT FORM STATE ---------- */
  const emptySalary = {
    name: "",
    code: "",
    offerDate: "",
    year: "",
    basic: "",
    pf: "",
    hra: "",
    uniform: "",
    kit: "",
    education: "",
    proPursuit: "",
    proTax: "",
    incomeTax: "",
    vacationLtc: "",
    transportAllowance: "",
    exGratiaBonus: "",
    medical: "",
    specialAllowance: "",
  };

  const [salary, setSalary] = useState(emptySalary);
  const [offerList] = useState(generateRandomOfferData());

  const handleChange = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  const handleReset = () => setSalary(emptySalary);

  /* ---------- DATATABLE CONFIG ---------- */
  const DataTableOptions = {
    columns: [
      { title: "Sno." },
      { title: "Name" },
      { title: "Code" },
      { title: "Offer Date" },
      { title: "Action" },
    ],

    data: offerList.map((item, index) => [
      index + 1,
      item.name,
      item.code,
      item.offerDate,
      `
        <button 
          class="btn btn-sm btn-primary"
          data-id="${item.id}"
        >
          Edit
        </button>
      `,
    ]),
  };

  return (
    <Row>
      <Col sm="12">
        <Card>
          <Card.Header className="text-center">
            <h5 className="mb-0">Employee Offer & Salary Details</h5>
          </Card.Header>

          <Card.Body>
            <Row>
              {/* ========== LEFT : FORM ========== */}
              <Col md={6}>
                <Form>
                  <Row className="g-2">
                    {Object.keys(emptySalary).map((field) => (
                      <Col md={6} key={field}>
                        <Form.Label className="text-capitalize">
                          {field.replace(/([A-Z])/g, " $1")}
                        </Form.Label>
                        <Form.Control
                          name={field}
                          value={salary[field]}
                          onChange={handleChange}
                        />
                      </Col>
                    ))}
                  </Row>

                  <div className="mt-3 d-flex gap-2">
                    <Button>Submit</Button>
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
Salary.layout="Accounting"
export default Salary