/** @type {import('next').NextConfig} */
module.exports = {
	//true로 지정시 콘솔문 2번씩 출력
	reactStrictMode: false,
	images: {
		//외부 웹사이트에서 가져오는 이미지를 최적화 하기 위해 해당 이미지 서버 도메인 등록
		//domain으로 등록하지 않은 url의 이미지를 Image컴포넌트로 호출시 콘솔 에러
		domains: ['image.tmdb.org', 'rb.gy'],
	},
};
