import { Preloader } from "./components/Preloader";
import { SmoothScroll } from "./components/SmoothScroll";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <Router />
        </ThemeProvider>
      </ErrorBoundary>
    </SmoothScroll>
  );
}

export default App;
