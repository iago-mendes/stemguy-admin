import styled from 'styled-components'

const Container = styled.div`
	flex-direction: column;

	.scroll
	{
		width: 100%;
		height: 85vh;
		overflow-y: auto;

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
			
			.post
			{
				z-index: 1;
				background-color: #fff;
				width: 100%;
				max-width: 35rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;
				padding: 1rem;
				border-radius: 2rem;
				cursor: pointer;
				transition: 0.25s;
				
				:hover
				{
					transform: scale(1.01);
					box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
				}
				
				.imgContainer
				{
					width: 100%;
					height: 40%;
					display: flex;
					align-items: center;
					justify-content: center;
					
					img
					{
						max-height: 100%;
						max-width: 100%;
					}
				}
				
				h1
				{
					height: 20%;
					width: 100%;
					text-align: center;
					font-family: Ubuntu;
					font-size: 2rem;
				}
				
				p
				{
					height: 20%;
					width: 100%;
					font-family: Roboto;
					font-size: 1rem;
				}
				
				ul
				{
					display: flex;
					align-items: center;
					justify-content: space-around;
					height: 20%;
					width: 100%;
					overflow-x: auto;
					
					li
					{
						list-style: none;
						font-family: Ubuntu;
						color: #fff;
						border-radius: 100rem;
						padding: 0.5rem;
						font-size: 1rem;
					}
				}
			}
		}

		.noResults
		{
			width: 100%;
			height: 85vh;
			display: flex;
			align-items: center;
			justify-content: center;
			
			h1
			{
				color: ${p => p.theme.colors.primary};
				font-family: Ubuntu;
				font-weight: 700;
				font-size: 3rem;
			}
		}
	}
`

export default Container