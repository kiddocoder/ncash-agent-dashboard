import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface LoanData {
  id: string
  clientName: string
  demandDate: string
  dueDate?: string
  loanType: string
  amount: string
  status: "Pending" | "Approved" | "Declined"
}

interface LoansTableProps {
  data: LoanData[]
  showDueDate?: boolean
}

export function LoansTable({ data, showDueDate = false }: LoansTableProps) {
  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-table-header">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              {showDueDate ? "Customer Name" : "Client Name"}
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">{showDueDate ? "Demand Date" : "Demand Time"}</th>
            {showDueDate && <th className="px-6 py-3 text-left text-sm font-semibold">Due Date</th>}
            <th className="px-6 py-3 text-left text-sm font-semibold">Loan Type</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
            {showDueDate && <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>}
            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((loan, index) => (
            <tr key={loan.id} className={index % 2 === 0 ? "bg-white" : "bg-table-row"}>
              <td className="px-6 py-4 text-sm">{loan.id}</td>
              <td className="px-6 py-4 text-sm font-medium">{loan.clientName}</td>
              <td className="px-6 py-4 text-sm">{loan.demandDate}</td>
              {showDueDate && <td className="px-6 py-4 text-sm">{loan.dueDate}</td>}
              <td className="px-6 py-4 text-sm">{loan.loanType}</td>
              <td className="px-6 py-4 text-sm">{loan.amount}</td>
              {showDueDate && <td className="px-6 py-4 text-sm">{loan.amount}</td>}
              <td className="px-6 py-4">
                <Badge
                  variant={
                    loan.status === "Approved" ? "success" : loan.status === "Pending" ? "warning" : "destructive"
                  }
                >
                  {loan.status}
                </Badge>
              </td>
              <td className="px-6 py-4">
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4 text-primary" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
