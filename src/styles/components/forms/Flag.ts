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

		input[type=text]
		{
			border: none;
			border-bottom: ${p => `${p.theme.colors.text}40`} 2px solid;

			height: 2.5rem;
			font-family: Roboto;
			font-size: 2rem;
			color: ${p => p.theme.colors.text};

			padding: 1rem;
		}

		input[type=color]
		{
			border: ${p => `${p.theme.colors.text}40`} 2px solid;

			cursor: pointer;
		}

		input
		{
			width: 100%;

			transition: 0.25s;

			:focus
			{
				border-color: ${p => p.theme.colors.primary};
			}
		}
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
			transition: 0.25s;
			
			:hover
			{
				background-color: rgb(89, 211, 89);
				color: ${p => p.theme.colors.primary};
			}

			:first-of-type:hover
			{
				background-color:  rgb(201, 64, 64);
			}
		}
	}
`

export default Container