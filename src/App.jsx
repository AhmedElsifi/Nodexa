import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import AllSections from "./pages/sections/AllSections";
import SectionDetail from "./pages/sections/SectionDetail";
import SectionSummary from "./pages/sections/SectionSummary";
import Tasks from "./pages/sections/Tasks";
import MCQuiz from "./pages/quiz/MCQuiz";
import Resources from "./pages/resources/Resources";
import Progress from "./pages/progress/Progress";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "sections", element: <AllSections /> },
        { path: "sections/:id", element: <SectionDetail /> },
        { path: "sections/:id/summary", element: <SectionSummary /> },
        { path: "sections/:id/tasks", element: <Tasks /> },
        { path: "sections/:id/quiz", element: <MCQuiz /> },
        { path: "progress", element: <Progress /> },
        { path: "resources", element: <Resources /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
