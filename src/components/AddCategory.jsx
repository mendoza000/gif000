import React,{useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories, categories}) => {

	const [textValue, setTextValue] = useState('')

	const changeInput = (e) => {
		const value = e.target.value
		setTextValue(value)
	}
	const submitInput = (e) => {
		e.preventDefault()
		if(textValue.trim().length < 2) return;
		if(categories.includes(textValue)) return;

		setCategories([textValue, ...categories])
		setTextValue('')
	}
	
	return(
		<form onSubmit={submitInput}>
			<input className="inputCategory" 
				type="text"
				value={textValue}
				onChange={changeInput}
			/>
		</form>
	)

}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
}

export default AddCategory