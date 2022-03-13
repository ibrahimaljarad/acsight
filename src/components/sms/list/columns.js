import { Link } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { MoreVertical, Archive } from "react-feather";

export const Columns = [
  {
    name: "Base URL",
    sortable: true,
    minWidth: "205px",
    selector: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        <div className="d-flex flex-column">
          <Link to={`/edit/${row.id}`} className="user-name text-truncate mb-0">
            <span className="font-weight-bold">{row.baseURL}</span>
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: "User Name",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.username,
  },
  {
    name: "From",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.fromName,
  },
  {
    name: "Vendor Code",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.vendorCode,
  },
  {
    name: "Api Key",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.apiKey,
  },
  {
    name: "Secret Key",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.secretKey,
  },
  {
    name: "Account SID",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.accountSID,
  },
  {
    name: "Auth Token",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.authToken,
  },
  {
    name: "Status",
    sortable: true,
    minWidth: "150px",
    selector: (row) =>
      row.status === true ? <span>Active</span> : <span>not active</span>,
  },
  {
    name: "Options",
    minWidth: "50px",
    selector: (row) => (
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem tag={Link} to={`/edit/${row.id}`} className="w-100">
            <Archive size={14} className="mr-50" />
            <span className="align-middle">Edit</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ),
  },
];
