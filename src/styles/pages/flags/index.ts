import styled from 'styled-components'

const Container = styled.div`
	main
	{
		height: fit-content;
		width: 100%;
		padding: 5rem;

		display: grid;
		grid-auto-rows: 7.5rem;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;
		
		.flag
		{
			width: 100%;
			max-width: 30rem;
			height: 100%;

			display: flex;
			align-items: center;

			border-radius: 2rem;
			cursor: pointer;
			transition: 0.25s;
			
			:hover
			{
				transform: scale(1.01);
				box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
			}
			
			h1
			{
				width: 100%;
				text-align: center;
				font-family: Ubuntu;
				font-size: 2.5rem;

				color: ${p => p.theme.colors.background};
			}
		}
	}
`

export default Container