"use client"; // Only needed for App Router

import { Fragment, memo } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const ViewPurchasePage = memo(() => {
  // Sample purchase data
  const purchases = [
    {
      purchaseNo: "#PUR-1001",
      client: "Airi Satou",
      created: "2024-01-12",
      status: "Pending",
      invoiceNo: "INV-9001",
    },
    {
      purchaseNo: "#PUR-1002",
      client: "Angelica Ramos",
      created: "2024-01-15",
      status: "Completed",
      invoiceNo: "INV-9002",
    },
    {
      purchaseNo: "#PUR-1003",
      client: "Ashton Cox",
      created: "2024-01-20",
      status: "Cancelled",
      invoiceNo: "INV-9003",
    },
  ];

  const DataTableOptions = {
    columns: [
      { title: "Purchase No" },
      { title: "Client Details" },
      { title: "Created" },
      { title: "Purchase Status" },
      { title: "Action" },
    ],

    // Map purchase data to table rows
    data: purchases.map((purchase) => [
      purchase.purchaseNo,
      purchase.client,
      purchase.created,
      purchase.status,
      // Action column → view invoice
      `<button class="btn btn-sm btn-success" data-id="${purchase.purchaseNo}">
     View
   </button>`,
    ]),
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">View Purchases</h5>
              <Link href="/purchases/create" className="btn btn-primary">
                Create Purchase
              </Link>
            </Card.Header>

            <Card.Body>
              <div className="table-responsive">
                <DataTable
                  className="table-striped"
                  data={DataTableOptions.data}
                  columns={DataTableOptions.columns}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

ViewPurchasePage.layout = "accounting";
export default ViewPurchasePage;
