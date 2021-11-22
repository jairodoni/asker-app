import { Stack } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export function PageNotFound() {
  return (
    <Card>
      <Stack
        p={4}
        sx={{
          alignItems: "center"
        }}
      >
        <h1>ERROR</h1>
        <h1>404</h1>
        <p>Page Not Found</p>
        <br />
        <Link to="/">
          <a
            style={{
              width: "100%",
              background: "#f1f1f1",
              color: "#333",
              padding: "5px 18px",
              borderRadius: "10px",
              fontWeight: "500"
            }}
          >
            Back to home
          </a>
        </Link>
      </Stack>
    </Card>
  );
}
