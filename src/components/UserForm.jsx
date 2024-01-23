import React from 'react'

export default function UserForm() {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                name='name'
                id='name'
                placeholder='Digite o seu nome'
                required/>
            </div>

            <div className="form-control">
                <label htmlFor="email">Nome:</label>
                <input type="email" 
                name='email'
                id='email'
                placeholder='Digite o seu e-mail'
                required/>
            </div>
        </div>
    )
}
