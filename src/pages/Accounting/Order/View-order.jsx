
import { Fragment, memo } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const viewOrders = memo(() => {
  // Raw data (can be replaced with API later)
  const orders = [
    {
      orderNo: "#ORD-1001",
      client: "Airi Satou",
      created: "2024-01-12",
      status: "Pending",
      invoiceNo: "INV-9001",
    },
    {
      orderNo: "#ORD-1002",
      client: "Angelica Ramos",
      created: "2024-01-15",
      status: "Completed",
      invoiceNo: "INV-9002",
    },
    {
      orderNo: "#ORD-1003",
      client: "Ashton Cox",
      created: "2024-01-20",
      status: "Cancelled",
      invoiceNo: "INV-9003",
    },
  ];

  const DataTableOptions = {
    columns: [
      { title: "Order No" },
      { title: "Client Details" },
      { title: "Created" },
      { title: "Order Status" },
      { title: "Invoice No" },
      { title: "Action" },
    ],

    data: orders.map((order) => [
      order.orderNo,
      order.client,
      order.created,
      order.status,
      order.invoiceNo,
      `<button class="btn btn-sm btn-success" data-id="${order.orderNo}">
     View
   </button>`,
    ]),



  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            {/* Navbar-style header */}
            <Card.Header className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">View Order</h5>

              <Link href="/orders/create" className="btn btn-sm btn-primary">
                Create Order
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

viewOrders.layout = "Accounting";
export default viewOrders;
