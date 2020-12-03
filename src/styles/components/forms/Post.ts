import styled from 'styled-components'
import {Styles} from 'react-select'
import { fontsize } from '*.jpg'

const Container = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 2rem;

	background-color: #fff;
	width: 80%;
	max-width: 100rem;

	padding: 2.5rem;
	border-radius: 2.5rem;

	.field
	{
		width: 80%;
		
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		label
		{
			font-family: Ubuntu;
			font-size: 1.5rem;
		}

		input
		{
			border: none;
			border-bottom: ${p => `${p.theme.colors.text}40`} 2px solid;

			height: 2.5rem;
			font-family: Roboto;
			font-size: 2rem;
			color: ${p => p.theme.colors.text};

			padding: 1rem;

			transition: 0.25s;

			:focus
			{
				border-bottom-color: ${p => p.theme.colors.primary};
			}
		}

		textarea
		{
			border-radius: 0.5rem;
			padding: 1rem;
			width: 100%;

			font-family: Roboto;
			font-size: 1.5rem;
			color: ${p => p.theme.colors.text};

			resize: vertical;

			border: ${p => `${p.theme.colors.text}40`} 2px solid;
			transition: border 0.25s;

			:focus
			{
				border-color: ${p => p.theme.colors.primary};
			}
		}
	}

	.textareaField
	{
		width: 100%;
	}

	.buttons
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		width: 100%;
		padding: 2rem;

		button
		{
			width: 15rem;
			height: 5rem;
			
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 1.75rem;

			background-color: ${p => p.theme.colors.primary};
			color: ${p => p.theme.colors.background};
			
			border: none;
			border-radius: 2rem;
			
			cursor: pointer;
			transition: 0.5s;
			
			:hover
			{
				background-color: rgb(89, 211, 89);
				color: #000;
			}

			:first-of-type:hover
			{
				background-color:  rgb(201, 64, 64);
			}
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
		borderColor: state.isFocused ? '#0D2C54' : '#31313140',

		fontFamily: 'Roboto',
		fontSize: '1.5rem'
	}),
}

export default Container