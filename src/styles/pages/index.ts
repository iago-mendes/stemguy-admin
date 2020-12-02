import styled from 'styled-components'

const Container = styled.div`
	flex-direction: column;

	header
	{
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
	}

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
				width: fit-content;
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
					height: 50%;
					display: flex;
					align-items: center;
					justify-content: center;

					img
					{
						height: 100%;
					}
				}

				h1
				{
					max-height: 10%;
					font-family: Ubuntu;
					font-size: 2rem;
				}

				p
				{
					max-height: 20%;
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
					padding: 1rem;
					
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
	}
`

export default Container