import { Stack, Typography } from "@mui/material";

export const Header = () => (
  <div className="header">
    <header>
      <Typography
        sx={{ backgroundColor: "#eee333", color: "black", textAlign: "center" }}
        variant="h4"
      >
        IGEO Erdbebenmonitor
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Platziere die MUI-ButtonGroups an dieser Stelle und importiere die benötigten MUI-Komponenten in Zeile 1 */}
      </Stack>
    </header>
  </div>
);
