import styled from 'styled-components'

const Container = styled.div`
	main
	{
		height: fit-content;
		min-height: 80vh;
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
			width: 25rem;
			height: 100%;
			background-color: #fff;

			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: space-between;

			border-radius: 1rem;
			padding: 1rem;

			box-shadow: 2px 2px 10px rgba(0,0,0,0.5);

			.img
			{
				width: 100%;
				height: 65%;
				overflow: hidden;

				border-top-right-radius: 0.5rem;
				border-top-left-radius: 0.5rem;

				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					filter: blur(3px);
					transform: scale(1.05);
				}
			}

			.group
			{
				height: 30%;
				width: 100%;

				display: flex;
				align-items: center;
				justify-content: space-between;

				h1
				{
					width: calc(100% - 3rem - 1rem);

					font-family: Ubuntu;
					font-size: 1.5rem;

					color: ${p => p.theme.colors.text};
				}

				.copy
				{
					background: none;
					border: none;
					border-radius: 10rem;

					display: flex;
					align-items: center;
					justify-content: center;

					width: 3rem;
					height: 3rem;
					
					color: ${p => p.theme.colors.primary};
					cursor: pointer;
					transition: 0.25s;

					:hover
					{
						color: ${p => p.theme.colors.background};
						background-color: ${p => p.theme.colors.primary};
					}
				}
			}
		}
	}
`

export default Container