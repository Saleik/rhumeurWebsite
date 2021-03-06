import React from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import ReactPlayer from 'react-player/lazy';
import { Container } from '../styles/globalStyles';
import { Introduce } from '../components/introduce/Introduce';

//Cst[component name] => custom components
const CstContainer = styled(Container)`
	grid-template-columns: 1fr;
`;

const PlayerWrapper = styled.div`
	grid-row: 3;
	justify-self: center;
	width: 80rem;
	height: 50rem;
`;

export const Fabrication = () => {
	const { data } = useData();

	const sectionIntroduce = data.fabrication.text;
	const url = data.fabrication.video.link;

	return (
		<section id='fabrication'>
			<CstContainer>
				<Introduce>{sectionIntroduce}</Introduce>
				<PlayerWrapper>
					<ReactPlayer
						height='100%'
						width='100%'
						url={url}
						controls={true}
						muted={true}
						playing={false}
						light
					/>
				</PlayerWrapper>
			</CstContainer>
		</section>
	);
};
