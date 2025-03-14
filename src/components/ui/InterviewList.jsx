import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InterviewList = () => {
  const mockInterviews = [
    { id: 1, title: "Frontend Developer ", status: "Pending", date: "2024-03-12" },
    { id: 2, title: "Backend Engineer", status: "Completed", date: "2024-03-10" },
    { id: 3, title: "Product Manager", status: "In Progress", date: "2024-03-11" },
  ];

  return (
    <div className="bg-white text-xs md:text-sm md:p-6  py-3 rounded-lg shadow-md">
      <div className="flex justify-between items-center px-1 mb-4">
        <h2 className="md:text-xl text-[9px] sm:text-sm font-bold">Interview List</h2>
        <Link href="/createInterview"><Button className="text-center text-[9px] sm:text-sm md:text-base text-white py-0 px-1 md:px-4 md:py-2 rounded-md">Create Interview</Button></Link>
        
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-[9px] sm:text-sm md:text-base">
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-[9px] sm:text-sm md:text-base">
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
