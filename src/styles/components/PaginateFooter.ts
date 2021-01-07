import styled from 'styled-components'

const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2.5rem;

	height: 5vh;
	min-height: 3rem;
	

	button
	{
		background: none;
		border: none;
		border-radius: 100rem;

		width: 3rem;
		height: 3rem;

		display: flex;
		align-items: center;
		justify-content: center;

		color: ${p => p.theme.colors.primary};

		cursor: pointer;
		transition: 0.25s;

		:hover
		{
			background-color: ${p => p.theme.colors.primary};
			color: ${p => p.theme.colors.background};
		}
	}

	.controller
	{
		input
		{
			border: none;
			border-bottom: ${p => `${p.theme.colors.text}40`} 2px solid;

			width: 5rem;
			background-color: ${p => p.theme.colors.background};

			font-family: Roboto;
			font-size: 1.5rem;
			color: ${p => p.theme.colors.text};

			padding-left: 1rem;
			padding-right: 1rem;

			transition: 0.25s;

			:focus, :hover
			{
				border-bottom-color: ${p => p.theme.colors.primary};
			}

			::-webkit-outer-spin-button, ::-webkit-inner-spin-button
			{
				-webkit-appearance: none;
				margin: 0;
			}

			[type=number]
			{
				-moz-appearance: textfield;
			}
		}

		span
		{
			font-family: Roboto;
			font-size: 1.5rem;
			color: ${p => p.theme.colors.text};
		}
	}
`

export default Container