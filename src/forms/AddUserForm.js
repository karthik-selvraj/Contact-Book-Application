import React, { useState } from 'react'

const AddUserForm = props => {
    
	const initialFormState = { id: null, name: '', username: '' }
    
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
        console.log("Show the name", value )

		setUser({ ...user, [name]: value })
	}

	return (
		
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} />
			<label>Contact</label>
			<input type="text" name="contact" value={user.contact} onChange={handleInputChange} />
            <label>Address</label>
			<input type="text" name="address" value={user.address} onChange={handleInputChange} />
			<button>Add contact</button>
		</form>

		
	)
}

export default AddUserForm