import { Button } from "reactstrap";
import UseMyTable from "../../../HOC/PaginationTable";
import { FcDocument } from 'react-icons/fc'
const NHTab = (props) => {
    const columns = [
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Server Assigned",
            accessor: "isServerAssigned"
        }, {
            Header: "Server Name",
            accessor: "serverName"
        },
        {
            Header: "Served",
            accessor: "served"
        }, {
            Header: "Served On",
            accessor: "servedAt"
        },
        {
            Header: "AOS",
            accessor: "maritalstatus",
            Cell: ({ value, row }) => {
                if (value) {

                    return <FcDocument />
                  } else {
                  return  <p className="mt-3">N/A</p>
                  }
            }
        }, {
            Header: "Payment",
            accessor: "sname",
            Cell: ({ value, row }) => {
                return <div className="d-flex">
                    <Button className="bg-info">Invoice</Button>
                    <Button className="bg-info">Auto</Button>
                    <Button className="bg-info">Link</Button>
                    <Button className="bg-info">Crypto</Button>
                </div>
            }
        }
    ]
    var data = []
    if (props.data.cases.length > 0) {
        data.push({
            name: props.data.cases[0].Plaintiffobj.name,
            isServerAssigned: props.data.cases[0].DefNum[0].jobs[0].isServerAssigned == true ? 'Yes' : 'No',
            serverName: props.data.cases[0].DefNum[0].jobs[0].serverDetails.name,
            served: props.data.cases[0].DefNum[0].jobs[0].isServed == true ? 'Yes' : 'No',
            servedAt: props.data.cases[0].DefNum[0].jobs[0].servedAt
        });
    }
    return <div>
        <UseMyTable columns={columns} data={data} />
    </div>
}
export default NHTab;