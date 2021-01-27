import {createGlobalStyle} from "styled-components";

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
		width: 100%;
		height: fit-content;
		min-height: 100%;
		padding: 5rem;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`