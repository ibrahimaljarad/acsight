import React, { Fragment, useState, useEffect, memo, useContext } from "react";

import { Columns } from "./columns";
import { Link } from "react-router-dom";

import { getAllData, login } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

import { Plus } from "react-feather";
import DataTable from "react-data-table-component";
import {
  Card,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

const DataTableServerSide = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.smsReducer);

  const [tableState, setFormState] = useState({
    renderId: 1,
  });

  useEffect(() => {
    login();
    dispatch(getAllData());
  }, [tableState.renderId]);

  const dataToRender = () => {
    if (store.allData.length > 0) {
      return store.allData;
    } else if (store.allData.length === 0) {
      return [];
    } else {
      return store.allData.slice(0);
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">SMS Table</CardTitle>
          <Button className="ml-2" color="primary">
            <Plus size={15} />

            <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
              Add SMS
            </Link>
          </Button>
        </CardHeader>

        <DataTable
          noHeader
          className="react-dataTable"
          columns={Columns}
          data={dataToRender()}
        />
      </Card>
    </Fragment>
  );
};

export default memo(DataTableServerSide);
