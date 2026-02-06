import { Fragment, memo } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const ViewOrders = memo(() => {
  const DataTableOptions = {
    columns: [
      { title: "Order No" },
      { title: "Client Details" },
      { title: "Created" },
      { title: "Order Status" },
      { title: "Action" },
    ],

    // Empty table data
    data: [],
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Order</h5>

             
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
ViewOrders.layout = "My-Order-Details";

export default ViewOrders;
