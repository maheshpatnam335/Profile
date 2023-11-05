import UseMyTable from "../../HOC/PaginationTable"
import {FcDocument} from 'react-icons/fc'

const PlaintiffPopUp=()=>{
    const columns=[
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Server Assigned",
            accessor: "dob"
        }, {
            Header: "Server Name",
            accessor: "deceased"
        },
        {
            Header: "Served",
            accessor: "dod"
        }, {
            Header: "Served On",
            accessor: "gender"
        },
        {
            Header: "AOS",
            accessor: "maritalstatus",
            Cell: ({ value, row }) => {
                return <FcDocument />
            }
        },{
            Header: "Payment",
            accessor: "pay",
            Cell: ({ value, row }) => {
                return <FcDocument />
            }
        },
    ]
    var data = [{name:'mahesh'}]
    return <div>
     <UseMyTable columns={columns} data={data} />
    </div>
}
export default PlaintiffPopUp;