import styled from "styled-components";

interface ContainerProps
{
	isExpanded: boolean
}

const Container = styled.nav<ContainerProps>`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: ${props => props.isExpanded ? '20rem' : '5rem'};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	
	transition: 0.25s;

	header
	{
		height: 25%;
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;

		img
		{
			background-color: #fff;
			border-radius: 100%;
			padding: 5px;
			width: 80%;
			transition: 0.25s;
		}
	}

	ul
	{
		height: 50%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		gap: 2rem;

		list-style: none;


		li
		{
			color: ${p => p.theme.colors.background};
		}
	}

	footer
	{
		height: 25%;
		width: 100%;
	}
`

export default Container