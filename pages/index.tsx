import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/requests';
import { Movie } from '@/typings';
import Banner from '@/components/Banner';
import Row from '@/components/Row';
import Modal from '@/components/Modal';
import { modalState } from '@/atoms/globalAtom';
import { useRecoilValue } from 'recoil';

interface Props {
	original: Movie[];
	topRated: Movie[];
	sf: Movie[];
	drama: Movie[];
	fantasy: Movie[];
	comedy: Movie[];
	action: Movie[];
}

const Home: NextPage<Props> = ({ original, topRated, sf, drama, fantasy, comedy, action }: Props) => {
	const showModal = useRecoilValue(modalState);

	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to-[#141414]'>
			<Head>
				<title>DCODELAB NEXTFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
				<Banner original={original} />

				<section>
					<Row title='Top Rated' movies={topRated} />
					<Row title='Fantasy' movies={fantasy} />
					<Row title='Science Fiction' movies={sf} />
					<Row title='Comedy' movies={comedy} />
					<Row title='Drama' movies={drama} />
					<Row title='Action' movies={action} />
				</section>
			</main>

			{showModal && <Modal />}
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [original, top, sf, drama, fantasy, comedy, action] = await Promise.all([
		fetch(requests.original).then((res) => res.json()),
		fetch(requests.top).then((res) => res.json()),
		fetch(requests.sf).then((res) => res.json()),
		fetch(requests.drama).then((res) => res.json()),
		fetch(requests.fantasy).then((res) => res.json()),
		fetch(requests.comedy).then((res) => res.json()),
		fetch(requests.action).then((res) => res.json()),
	]);

	return {
		props: {
			original: original.results,
			topRated: top.results,
			sf: sf.results,
			drama: drama.results,
			fantasy: fantasy.results,
			comedy: comedy.results,
			action: action.results,
		},
	};
};
