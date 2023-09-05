import { readFileSync } from "fs";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { join } from "path";
import Container from "@mui/material/Container";
import { MarkdownRenderer } from "core/components";

interface PageProps {
  markdown: string;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const markdown = await readFileSync(
    join(process.cwd(), "./README.md"),
    "utf8"
  );
  return { props: { markdown } };
};

export default function Page({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container maxWidth="lg">
      <MarkdownRenderer markdown={markdown} />
    </Container>
  );
}
