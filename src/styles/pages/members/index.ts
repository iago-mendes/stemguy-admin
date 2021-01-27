import styled from 'styled-components'

const Container = styled.div`
	flex-direction: column;

	main
	{
		height: fit-content;
		width: 100%;
		padding: 5rem;

		display: grid;
		grid-auto-rows: 30rem;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;

		.member
		{
			background-color: #fff;
			width: 30rem;
			height: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			padding: 1rem;
			border-radius: 2rem;
			
			cursor: pointer;
			transition: 0.25s;
			box-shadow: 2px 2px 5px rgba(0,0,0,0.5);

			:hover
			{
				background-color: ${p => p.theme.colors.primary};
				color: #fff;
				border-radius: 0;

				.img img
				{
					border-radius: 0;
				}
			}

			.img
			{
				width: 70%;
				overflow: hidden;

				img
				{
					border-radius: 10rem;
					transition: 0.25s;
				}
			}

			h1
			{
				font-family: Ubuntu;
				font-size: 2.5rem;
			}

			h2
			{
				font-family: Roboto;
				font-size: 2rem;
			}
		}
	}
`

export default Container