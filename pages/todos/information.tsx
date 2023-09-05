import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function TodosInformationPage() {
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h1">
        Challenge!
      </Typography>
      <Typography gutterBottom variant="body1">
        Create a Todo application using the Pitstop frontend stack. Create your
        application in the pages/todos.tsx file, this page file maps to the
        route{" "}
        <Link style={{ textDecoration: "underline" }} href="/todos">
          here
        </Link>
        . Visit{" "}
        <Link
          style={{ textDecoration: "underline" }}
          href="/todos/endpoint-info"
        >
          this page
        </Link>{" "}
        for more information on the available endpoints.
      </Typography>
      <Typography gutterBottom variant="h3">
        Requirements
      </Typography>
      <ul>
        <li>
          <Typography gutterBottom variant="body1">
            Fetch todos from the /api/todo endpoint and display them
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="body1">
            Add a new todo using the POST /api/todo endpoint
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="body1">
            Delete a todo using the DELETE /api/todo/\[id\] endpoint
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="body1">
            Toggle the isCompleted property using PUT /api/todo/\[id\] endpoint
          </Typography>
        </li>
        <li>
          <Typography gutterBottom variant="body1">
            Your solution should use Mui Components, and SWR for data fetching
            and state management. More information on the dependencies can be
            found
            <Link style={{ textDecoration: "underline" }} href="/read-me">
              here
            </Link>
          </Typography>
        </li>
      </ul>
    </Container>
  );
}
