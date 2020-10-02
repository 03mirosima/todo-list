import React, {useState} from 'react'


function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => { 
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({id: Math.floor(Math.random()*1000),
        text: input,})
        setInput('');
    }
    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='İş Ekle' value={input} name='text' onChange={handleChange} className='todo-input'></input>
            <button className='todo-button'>Ekle</button>


            </form>
        </div>
    )
}

export default TodoForm
