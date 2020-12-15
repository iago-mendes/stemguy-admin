import styled from 'styled-components'

const Container = styled.div`
	main
	{
		height: fit-content;
		width: 100%;
		padding: 5rem;

		display: grid;
		grid-auto-rows: 20rem;
		grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;
		
		.image
		{
			width: 100%;
			max-width: 25rem;
			height: 100%;
			background-color: #fff;

			display: flex;
			align-items: center;
			flex-direction: column;
			gap: 0.5rem;

			border-radius: 2rem;
			padding: 1rem;

			position: relative;

			cursor: pointer;
			transition: 0.25s;
			
			:hover
			{
				transform: scale(1.01);
				box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
			}

			.img
			{
				width: 100%;
				height: 80%;
				overflow: hidden;

				display: flex;
				align-items: center;
				justify-content: center;

				div
				{
					width: 100%;
					height: 100%;
				}

				img
				{
					border-radius: 1rem;
				}
			}
			
			h1
			{
				width: 100%;
				height: 20%;

				text-align: left;
				font-family: Ubuntu;
				font-size: 1.5rem;

				color: ${p => p.theme.colors.text};
			}

			.copy
			{
				position: absolute;
				right: 0.5rem;
				bottom: 0.5rem;

				border-radius: 10rem;
				padding: 0.5rem;
				
				color: ${p => p.theme.colors.text};
				transition: 0.25s;

				:hover
				{
					background-color: rgba(0,0,0,0.25);
				}
			}
		}
	}
`

export default Container