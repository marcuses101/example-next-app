import GlobalStyles, { GlobalStylesProps } from "@mui/material/GlobalStyles";

const customScrollbarStyles: GlobalStylesProps["styles"] = {
  "::-webkit-scrollbar": {
    width: "12px",
    backgroundColor: "#F5F5F5",
  },
  "::-webkit-scrollbar-track": {
    WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
  },
  "::-webkit-scrollbar-thumb": {
    WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    backgroundColor: "#666",
    borderRadius: "10px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
  "::-webkit-scrollbar-thumb:active": {
    background: "#444",
  },
};

// TODO apply theme styles to normal a tags for use in News/Events/CMSKitPages
const otherStyles: GlobalStylesProps["styles"] = {
  a: {
    textDecoration: "none",
  },
  "a:visited:not(.Mui*)": {
    color: "#0067ab",
  },
};
const styles = { ...customScrollbarStyles, ...otherStyles };

export function GlobalStylesComponent() {
  return <GlobalStyles styles={styles} />;
}
