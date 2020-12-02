import styled from 'styled-components'

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
			border-bottom: ${p => `${p.theme.colors.text}40`} 1px solid;

			height: 2.5rem;
			font-family: Roboto;
			font-size: 2rem;
			padding: 1rem;

			transition: 0.25s;

			:focus
			{
				border-bottom: ${p => p.theme.colors.text} 1px solid;
			}
		}

		textarea
		{
			border-radius: 0.5rem;
			padding: 1rem;
			width: 100%;

			font-family: Roboto;
			font-size: 1.5rem;

			resize: vertical;

			border: ${p => `${p.theme.colors.text}40`} 1px solid;
			transition: border 0.25s;

			:focus
			{
				border: ${p => p.theme.colors.text} 1px solid;
			}
		}
	}

	.textareaField
	{
		width: 100%;
	}
`

export default Container