import Input from "./components/atoms/Input";

function App() {
    return (
        <div className="App">
            <Input disabled label="App Name" error={"Error Description"} />
        </div>
    );
}

export default App;
