import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InterviewList = () => {
  const mockInterviews = [
    { id: 1, title: "Frontend Developer Interview", status: "Pending", date: "2024-03-12" },
    { id: 2, title: "Backend Engineer Interview", status: "Completed", date: "2024-03-10" },
    { id: 3, title: "Product Manager Interview", status: "In Progress", date: "2024-03-11" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Interview List</h2>
        <Link href="/createInterview"><Button>Create Interview</Button></Link>
        
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {mockInterviews.map((interview) => (
            <TableRow key={interview.id}>
              <TableCell>{interview.title}</TableCell>
              <TableCell>{interview.status}</TableCell>
              <TableCell>{interview.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InterviewList;
