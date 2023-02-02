import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCQsPGQHYyr-puN7UJfIngPK-WpgfDXynw',
	authDomain: 'dcode-flix.firebaseapp.com',
	projectId: 'dcode-flix',
	storageBucket: 'dcode-flix.appspot.com',
	messagingSenderId: '14157653570',
	appId: '1:14157653570:web:29f040c9308e55d995efdb',
};

//firebase로 구동한 app이 없으면 아직 인증처리가 되지 않은 상태에서만 초기화
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
