import Stepper from "./LinearStepper"
import {CssBaseline, Box, Paper, Container} from "@material-ui/core"

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4} >
        <Paper component={Box} p={3}>
          <Stepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
