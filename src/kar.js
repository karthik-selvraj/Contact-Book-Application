import React from "react"

const App = () => {
	const usersData = [
		{ id: 1, name: 'Karthik', email: 'karthik@gmail.com', contact: 'Andrei', address: 'salem' },
		{ id: 2, name: 'Dinesh', email: 'silicon@gmail.com', contact: 'kumar', address: 'chennai' },
		{ id: 3, name: 'Harish', email: 'Ventures@gmail.com', contact: 'Major Sameer', address: 'Coimbatore' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)


	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email })
	}

	return (
		<div className="container">
			
			<h1>CONTACT BOOK APPLICATION</h1>
			<div className="d-flex listhead">

				<div className="d-flex listhead">
					<h2>Contacts and Details </h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>

				<div className="d-flex listhead">
					{editing ? (
						<Fragment>
							<h2>Edit Contact</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Contact</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>

			</div>
		</div>
	)
}

export default App