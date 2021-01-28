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
		gap: 1rem;

		label
		{
			font-family: Ubuntu;
			font-size: 2rem;
			font-weight: 700;

			border-left: ${p => p.theme.colors.text} 5px solid;
			padding-left: 1rem;
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
			margin-left: 2rem;

			transition: 0.25s;

			:focus, :hover
			{
				border-bottom-color: ${p => p.theme.colors.primary};
			}
		}

		input[type=date]
		{
			cursor: pointer;
		}

		input[type=color]
		{
			border: ${p => `${p.theme.colors.text}40`} 2px solid;
			cursor: pointer;

			padding: 0;
			width: 100%;
		}

		.dropzone, .switch
		{
			margin-left: 2rem;
		}

		.list
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			width: fit-content;
			min-width: 30rem;
			list-style: none;

			button
			{
				display: flex;
				align-items: center;
				justify-content: center;

				background: none;
				border: none;
				border-radius: 10rem;

				cursor: pointer;
				/* color: ${p => p.theme.colors.primary}; */
				transition: 0.25s;

				:hover
				{
					color: #fff;
				}
			}

			.add:hover
			{
				background-color:  ${p => p.theme.colors.buttonGreen};
			}

			li
			{
				display: flex;
				align-items: center;
				gap: 1rem;

				.remove:hover
				{
					background-color:  ${p => p.theme.colors.buttonRed};
				}
			}
		}
	}

	.textarea
	{
		width: 100%;

		textarea
		{
			border-radius: 0.5rem;
			padding: 1rem;
			margin-left: 2rem;
			width: calc(100% - 2rem);

			font-family: Roboto;
			font-size: 1.5rem;
			color: ${p => p.theme.colors.text};

			resize: vertical;

			border: ${p => `${p.theme.colors.text}40`} 2px solid;
			transition: border 0.25s;

			:focus, :hover
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
				color: ${p => p.theme.colors.primary};

				transform: scale(1.1);
			}
		}

		.cancel:hover
		{
			background-color:  ${p => p.theme.colors.buttonRed};
		}

		.submit:hover
		{
			background-color: ${p => p.theme.colors.buttonGreen};
		}
	}
`

export default Container