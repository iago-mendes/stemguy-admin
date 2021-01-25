import styled from 'styled-components'

const Container = styled.header`
	width: 100%;
	height: 15vh;

	background-color: #fff;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-left: 10rem;
	padding-right: 10rem;

	.group
	{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		h1
		{
			font-size: 4rem;
			font-family: Ubuntu;
		}
	}

	.inputField
	{
		height: 4rem;
		width: 25rem;

		color: ${p => p.theme.colors.textLight}80;
		border: ${p => p.theme.colors.textLight}80 solid 2px;
		border-radius: 2rem;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;

		transition: 0.25s;

		:hover, :focus
		{
			color: ${p => p.theme.colors.primary};
			border-color: ${p => p.theme.colors.primary};
		}

		input
		{
			width: 100%;
			height: 100%;
			border: none;

			font-family: Roboto;
			font-weight: 700;
			font-size: 1.75rem;
			color: ${p => p.theme.colors.primary};
		}
	}
`

export default Container