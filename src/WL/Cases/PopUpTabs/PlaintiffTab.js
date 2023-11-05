import { useState } from "react"
import UseMyTable from "../../../HOC/PaginationTable"

const PlaintiffTab = (props) => {
  const [state, setState] = useState({});
  const columns = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "DOB",
      accessor: "dob"
    }, {
      Header: "Deceased",
      accessor: "deceased"
    },
    {
      Header: "DOD",
      accessor: "dod"
    }, {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "Marital status",
      accessor: "maritalstatus"
    }, {
      Header: "Spouse Name",
      accessor: "sname"
    },
    {
      Header: "EIN",
      accessor: "ein"
    }, {
      Header: "SSN",
      accessor: "ssn"
    }
  ]
  var data = []
  if (props.data.cases.length>0) {
    data.push({
      name: props.data.cases[0].Plaintiffobj.name,
      dob: props.data.cases[0].Plaintiffobj.dateOfBirth,
      deceased: props.data.cases[0].Plaintiffobj.deceased,
      dod: props.data.cases[0].Plaintiffobj.dateOfDeath,
      gender: props.data.cases[0].Plaintiffobj.gender,
      maritalstatus: props.data.cases[0].Plaintiffobj.maritalStatus,
      sname: props.data.cases[0].Plaintiffobj.spouseName,
      ein: props.data.cases[0].Plaintiffobj.ein,
      ssn: props.data.cases[0].Plaintiffobj.ssn
    });
  }

  return <div>
    {props.data.cases.length > 0 ? <UseMyTable columns={columns} data={data} /> : ''}
  </div>
}
export default PlaintiffTab;