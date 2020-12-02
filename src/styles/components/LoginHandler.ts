import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	background-color: ${p =>p.theme.colors.background};

	width: 100%;
	height: 100%;

	position: absolute;
	top: 0;
	left: 0;

	.img
	{
		width: 25vw;
		height: 25vw;
	}

	main
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		h1
		{
			color: ${p => p.theme.colors.primary};
			max-width: 25rem;

			font-family: Ubuntu;
			font-weight: 700;
			font-size: 2rem;
		}

		button
		{
			padding: 0.5rem;
			padding-left: 1rem;
			padding-right: 1rem;
			border-radius: 100rem;

			border: none;
			background-color: ${p => p.theme.colors.primary};

			color: ${p => p.theme.colors.background};
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 1.5rem;

			outline: none;

			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
				transform: scale(1.1);
			}
		}
	}
`

export default Container