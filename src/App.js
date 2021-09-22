import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	const usersData = [
		{ id: 1, name: 'Karthik', username: 'Python 2021', authorname: 'Andrei' },
		{ id: 2, name: 'Dinesh', username: 'siliconValley', authorname: 'kumar' },
		{ id: 3, name: 'Harish', username: 'Ventures', authorname: 'Major Sameer' },
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

		setCurrentUser({ id: user.id, name: user.name, bookname: user.bookname })
	}

	return (
		<div className="container">
			<div className="ui search">
				<div className="ui icon input">
				</div>

			</div>
			<h1>CONTACT BOOK APPLICATION</h1>
			<div className="flex-row">

				<div className="flex-small">
					<h2> Contacts and Details </h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>

				<div className="flex-small">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>

			</div>
		</div>
	)
}

export default App