import { Fragment } from "react";
import { Row, Col } from "reactstrap";
import TableServerSide from "./table";

const Tables = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-start breadcrumb-wrapper"></div>
      <Row>
        <Col sm="12">
          <TableServerSide />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
