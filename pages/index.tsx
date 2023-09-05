import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h1">
        Frontend Stack Example
      </Typography>

      <ul>
        <li>
          <Link href="/read-me">Info for project dependencies</Link>
        </li>
        <li>
          <Link href="/todos/information">Your challenge awaits</Link>
        </li>
      </ul>
    </Container>
  );
}
