import { Stack } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export function PageNotFound() {
  return (
    <Card>
      <Stack
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
              background: "#f1f1f1",
              color: "#333",
              padding: "5px 16px",
              borderRadius: "10px",
              fontWeight: "500"
            }}
          >
            Voltar a primeira pagina
          </a>
        </Link>
      </Stack>
    </Card>
  );
}
