import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
import Select from "react-select";
import { getAllData, login } from "../store/actions";

import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EditSms = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.smsReducer);
  const { id } = useParams();

  const ProviderID = [
    {
      value: 1,
      label: "PostaGuvercini",
    },
    {
      value: 2,
      label: "MobilDev",
    },
    {
      value: 3,
      label: "JetSMS",
    },
    {
      value: 4,
      label: "MailJet",
    },
    {
      value: 5,
      label: "Twilio",
    },
    {
      value: 6,
      label: "InfoBip",
    },
    {
      value: 7,
      label: "Vonage",
    },
  ];
  const Status = [
    {
      value: 1,
      label: " true",
    },
    {
      value: 0,
      label: "false",
    },
  ];

  const [formState, setFormState] = useState({
    ID: 0,
    ProviderID: null,
    PartnerID: 5,
    BaseURL: "",
    FromName: "  ",
    Username: "",
    Password: " ",
    Status: false,
    paramID: id,
  });
  const [defaultData, SetDefultData] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    login();
    dispatch(getAllData());
    SetDefultData(result);
  }, []);

  if (store.allData.length > 0) {
    var result = store.allData.find((obj) => {
      return obj.id == formState.paramID;
    });

    console.log("state", result);
  } else if (store.allData.length === 0) {
    return [];
  } else {
    return store.allData.slice(0);
  }

  const toggleStatus = () => {
    axios
      .post(
        `http://c4f2.acsight.com:7770/api/system/change-stat-partner-sms-provider?id=${id}`
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("yes", response);
        }
      });
  };

  const onSubmit = async () => {
    await axios
      .post(
        `http://c4f2.acsight.com:7770/api/system/update-partner-sms-provider`,
        {
          ProviderID: formState.ProviderID,
          ID: id,
          PartnerID: formState.PartnerID,
          BaseURL: formState.BaseURL,
          FromName: formState.FromName,
          Username: formState.Username,
          Password: formState.Password,
          Status: formState.status,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("YES");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="w-100">
      <Card>
        <CardBody>
          <Row>
            <Form onSubmit={onSubmit}>
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="BaseURL">Base URL</Label>
                    <Input
                      autoFocus
                      type="text"
                      name="BaseURL"
                      id="BaseURL"
                      defaultValue={defaultData.baseURL}
                      placeholder="BaseURL..."
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="FromName">From</Label>
                    <Input
                      autoFocus
                      type="text"
                      name="FromName"
                      id="FromName"
                      defaultValue={defaultData.fromName}
                      placeholder="FromName..."
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col sm="12" className="pb-2">
                  <CardBody className="p-0">
                    <FormGroup>
                      <Label for="templateContent">
                        User Name
                        <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        autoFocus
                        defaultValue={defaultData.username}
                        name="Username"
                        id="Username"
                        placeholder="Username..."
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </FormGroup>
                  </CardBody>
                </Col>
                <Col sm="12" className="pb-2">
                  <CardBody className="p-0">
                    <FormGroup>
                      <Label for="Password">
                        Password
                        <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type={passwordShown ? "text" : "password"}
                        defaultValue={defaultData.password}
                        autoFocus
                        name="Password"
                        id="Password"
                        placeholder="Password..."
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </FormGroup>
                  </CardBody>
                </Col>
                <Col sm="12" className="pb-2">
                  <CardBody className="p-0">
                    <FormGroup>
                      <Label for="List Type">
                        provider Name : <span className="text-danger">*</span>
                      </Label>
                      <Select
                        // value={ProviderID}
                        value={ProviderID.filter(
                          (option) => option.value == id
                        )}
                        required
                        className="react-select"
                        classNamePrefix="select"
                        options={ProviderID}
                        isClearable={false}
                        name="List Type"
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            ProviderID: e.value,
                          })
                        }
                      />
                    </FormGroup>
                  </CardBody>
                </Col>
                <Col sm="12" className="pb-2">
                  <CardBody className="p-0">
                    <FormGroup>
                      <Label for="Status">
                        Status : <span className="text-danger">*</span>
                      </Label>
                      <Select
                        value={Status}
                        required
                        className="react-select"
                        classNamePrefix="select"
                        options={Status}
                        isClearable={false}
                        name="List Type"
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            Status: e.value,
                          })
                        }
                      />
                    </FormGroup>
                  </CardBody>
                </Col>
                <Col sm="12">
                  <FormGroup className="d-flex mb-0">
                    <Button
                      className="mr-1"
                      color="primary"
                      type="submit"
                      onClick={onSubmit}
                    >
                      create
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <Col sm="12">
              <FormGroup className="d-flex mb-0">
                <Button
                  className="mr-1"
                  color="primary"
                  type="submit"
                  onClick={toggleStatus}
                >
                  Toggle status
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditSms;
