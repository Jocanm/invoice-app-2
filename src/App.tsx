import Button from "./components/ui/button/Button";

const App = () => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Button onClick={onClick} isPrimaryIcon>
        New Invoice
      </Button>
    </div>
  );
};

export default App;
