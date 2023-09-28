import { useState } from "react";
import { getClients } from "./api";
import { transformData } from "./utils";
import UserTable from "./components/UserTable";
import "./App.css";

function App() {
	const [users, setUsers] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const handleClick = () => {
		setLoading(true);
		setUsers(null);
		getData();
	};

	const getData = async () => {
		const userData = transformData(await getClients());
		setUsers(userData);
		setLoading(false);
	};

	return (
		<div className="App">
			<button onClick={handleClick}>Generate Data</button>
			<UserTable users={users} isLoading={isLoading} />
		</div>
	);
}

export default App;
