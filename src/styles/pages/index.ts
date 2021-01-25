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
				width: 30rem;
				height: 100%;

				display: flex;
				flex-direction: column;
				align-items: center;
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
					width: 100%;
					height: 40%;
					overflow: hidden;

					img
					{
						border-radius: 1rem;
						transition: 0.25s;
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

				.scroll
				{
					width: 100%;
					height: 20%;
					overflow-x: auto;

					::-webkit-scrollbar
					{
						height: 0.75rem;
					}

					::-webkit-scrollbar-track
					{
						box-shadow: inset 0 0 0.5rem rgba(0,0,0,0.25);
						border-radius: 1rem;
					}

					::-webkit-scrollbar-thumb
					{
						background: ${p => p.theme.colors.textLight}80;
						border-radius: 1rem;
					}

					ul
					{
						height: 100%;
						min-width: 100%;
						padding-left: 2rem;
						padding-right: 2rem;
						display: flex;
						align-items: center;
						justify-content: space-between;
						gap: 2rem;

						li
						{
							list-style: none;
							font-family: Ubuntu;
							font-weight: 700;
							color: #fff;
							border-radius: 0.75rem;
							padding: 0.5rem;
							font-size: 1rem;
							white-space: nowrap;
						}
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