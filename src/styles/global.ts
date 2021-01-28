import {createGlobalStyle} from "styled-components";
import {Styles} from 'react-select'

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}

	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body
	{
		background-color: ${p =>p.theme.colors.background};
		color: ${props => props.theme.colors.text};
	}

	#__next
	{
		display: flex;
		width: 100vw;
		height: 100vh;

		overflow: hidden;
	}

	.page
	{
		height: 100vh;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
	}

	.form
	{
		main
		{
			width: 100%;
			height: fit-content;
			min-height: 100%;
			padding: 5rem;

			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}
`

export const selectStyles: Styles =
{
	option: (provided, state) => (
	{
		...provided,
		cursor: 'pointer',

		fontFamily: 'Roboto',
		fontSize: '1.5rem',

		transition: '0.1s',
		color: state.isSelected ? '#E6F2FF' : state.isFocused ? '#313131' : '#7B7B7B',
		backgroundColor: state.isSelected ? '#0D2C54' : '#E6F2FF'
	}),

	menu: (provided, state) => (
	{
		...provided,
		fontFamily: 'Roboto',
		backgroundColor: '#E6F2FF'
	}),

	control: (provided, state) => (
	{
		...provided,

		cursor: 'pointer',
		borderWidth: '2px',
		borderColor: state.isFocused ? '#0D2C54' : '#31313140',
		transition: '0.25s',

		fontFamily: 'Roboto',
		fontSize: '1.5rem'
	}),
}