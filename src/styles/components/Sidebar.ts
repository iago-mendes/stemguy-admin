import styled from "styled-components";

interface ContainerProps
{
	isClicked: boolean
}

const Container = styled.nav<ContainerProps>`
  /* background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: ${props => props.isClicked ? '20rem' : '5rem'};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 2rem;
	padding-bottom: 2rem;
	cursor: pointer;
	transition: 0.25s;

	img
	{
		background-color: #fff;
		border-radius: 100%;
		padding: 5px;
		width: ${props => props.isClicked ? '15rem' : '4rem'};
		height: ${props => props.isClicked ? '15rem' : '4rem'};
		transition: 0.25s;

		:hover
		{
			transform: ${props => props.isClicked ? 'scale(1.05)' : 'scale(1.1)'};
		}
	}

	form
	{
		background-color: #fff;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-right: 1rem;
		padding-left: 1rem;
		gap: 0.5rem;
		height: 4rem;
		width: ${p => p.isClicked ? '90%' : '4rem'};
		transition: 0.25s;

		:hover
		{
			transform: ${props => props.isClicked ? 'scale(1.05)' : 'scale(1.1)'};
		}

		input
		{
			width: 100%;
			height: 75%;
			outline: none;
			border: none;
			font-family: Ubuntu;
		}
	} */
`

export default Container