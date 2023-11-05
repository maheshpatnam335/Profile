import { Fragment } from "react";

const InputBox = (props) => {

    return <Fragment>
        <label for={props.name}>{props.label}</label>
        {props.required ? <span style={{ color: 'red' }}>*</span> : ''}
        <input
            id={props.name}
            type={props.type ? props.type : "Text"}
            name={props.name}
            value={props.value}
            className='form-control'
            onChange={(e) => props.handleChange(e.target.name, e.target.value)}
            style={{ width: props.Width }}
            placeholder={props.placeholder ? props.placeholder : ''}
            disabled={props.disabled}
            maxLength={props.maxLength ? props.maxLength : 1000}
        />
    </Fragment>
}
export default InputBox;