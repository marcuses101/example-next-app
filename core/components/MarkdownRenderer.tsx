import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const components: Components = {
  h1: ({ node, ...props }) => (
    <Typography gutterBottom variant="h2" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <Typography gutterBottom variant="h3" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <Typography gutterBottom variant="h4" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <Typography gutterBottom variant="h5" {...props} />
  ),
  h5: ({ node, ...props }) => (
    <Typography gutterBottom variant="h6" {...props} />
  ),
  h6: ({ node, ...props }) => (
    <Typography gutterBottom variant="h6" {...props} />
  ),
  p: ({ node, ...props }) => (
    <Typography gutterBottom variant="body1" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <Typography variant="body1" fontWeight="bold" {...props} />
  ),
  b: ({ node, ...props }) => (
    <Typography variant="body1" fontWeight="bold" {...props} />
  ),
  hr: ({ node, ...props }) => <Divider sx={{ my: 2 }} {...props} />,
};

export function MarkdownRenderer({ markdown }: { markdown: string }) {
  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
