import { Movie } from '@/typings';
import Image from 'next/image';
import { baseURL } from '@/constants/movie';
import { modalState, movieState } from '@/atoms/globalAtom';
import { useRecoilState } from 'recoil';

interface Props {
	movie: Movie;
}

function Thumbnail({ movie }: Props) {
	const [ShowModal, setShowModal] = useRecoilState(modalState);
	const [CurrentMovie, setCurrentMovie] = useRecoilState(movieState);

	return (
		<div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w[260px] md:hover:scale-105'>
			<Image
				src={`${baseURL}w500${movie.backdrop_path || movie.poster_path}`}
				fill
				//콘솔 에러로 image priority에 관한 내용이 뜰때에는 아래와 같이 priority항목을 지우고
				//placeholder와 blurDataURL값을 추가
				//해당 기능은 이미지 출력을 우선순위에서 빼는 대신 이미지가 로딩될때까지 blur처리된 이미지를 호출
				//priority
				placeholder='blur'
				blurDataURL={`${baseURL}w500${movie.backdrop_path || movie.poster_path}`}
				sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
				alt={`${movie.title}`}
				className='rounded-sm object-cover md:rounded'
				onClick={() => {
					setShowModal(true);
					setCurrentMovie(movie);
				}}
			/>
		</div>
	);
}

export default Thumbnail;
