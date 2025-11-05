import { Stack, Typography, ButtonGroup, Button } from "@mui/material";

export const Header = ({ setMinMagnitude, setTimeRange }) => (
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
        {
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={() => setMinMagnitude("all")}>Alle</Button>
            <Button onClick={() => setMinMagnitude("1.0")}>1.0+</Button>
            <Button onClick={() => setMinMagnitude("2.5")}>2.5+</Button>
            <Button onClick={() => setMinMagnitude("4.5")}>4.5+</Button>
            <Button onClick={() => setMinMagnitude("significant")}>
              Significant
            </Button>
          </ButtonGroup>
        }
        {
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={() => setTimeRange("month")}>Past 30 Days</Button>
            <Button onClick={() => setTimeRange("week")}>Past 7 Days</Button>
            <Button onClick={() => setTimeRange("day")}>Past Day</Button>
            <Button onClick={() => setTimeRange("hour")}>Past Hour</Button>
          </ButtonGroup>
        }
      </Stack>
    </header>
  </div>
);
