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
		border: rgb(138, 138, 138) solid 1px;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;

		input
		{
			width: 100%;
			height: 100%;
			border: none;
			font-family: Roboto;
			font-size: 1.5rem;
		}
	}
`

export default Container