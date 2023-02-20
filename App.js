// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  const heading2 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2]
  );
  console.log(heading1)
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);