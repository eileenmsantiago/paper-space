import React, {useState} from 'react';

const TextArea = (props) => {

    const [value, setValue] = useState('');

    console.log(value);
    
    return (
        <div className="textArea">
            <div className="textArea__wrapper">
                <form>
                    <textarea
                        className="textArea__container"
                        placeholder="Start Writing..."
                        cols="100"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        >
                    </textarea>
                </form>
            </div>
        </div>
    )
}
export default TextArea;