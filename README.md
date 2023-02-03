## Next.js 세팅

### Next.js + tailwindcss (feat.typescript)

```bash
npx create-next-app --example with-tailwindcss next-flix
```

### 실행 명령어

```bash
  npm run dev
```

---

### tailwindcss 확장기능 설치

tailwind css intellisense

### 넓이값 단위 계산

[넓이값 단위 계산](https://tailwindcss.com/docs/width)

### 미디어쿼리 단위

[미디어쿼리 단위](https://tailwindcss.com/docs/screens)

---

### 커스텀 tailwindCSS적용

styles > globals.css로 이동<br>
미리 비어있는 base, components, utilities가 적용되어 있는데 원하는 클래스명에 tailwindCSS를 조합해 커스텀 스타일을 등록해 재활용 가능

---

### react-icons, heroicons 설치

[react-icons](https://react-icons.github.io/react-icons)

```bash
  npm install react-icons --save
```

---

### API_KEY 숨기기

TMDB에서 로그인후 설정 - API에서 API_KEY복사
.env.local 파일 생성후 API_KEY 등록<br>
.gitignore에 해당 파일을 등록하여 git저장소 등록에서 제외 <br>
해당 파일은 SSR방식으로 동작하므로 클라이언트에서 확인 불가 <br>
.env.local파일 변경후에는 무조건 서버 재실행

---

### tmdb 영화 장르 코드 번호

[영상 코드 번호](https://developers.themoviedb.org/3/genres/get-movie-list)

```
MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37
---------------------
TV SHOW
Action & Adventure  10759
Animation           16
Comedy              35
Crime               80
Documentary         99
Drama               18
Family              10751
Kids                10762
Mystery             9648
News                10763
Reality             10764
Sci-Fi & Fantasy    10765
Soap                10766
Talk                10767
War & Politics      10768
Western             37
```

### 스크롤바 디자인 변경

```
npm install tailwind-scrollbar-hide
npm install --save-dev tailwind-scrollbar
```

### tmdb 이미지 사이즈 정보

[tmdb 이미지 사이즈 코드 확인](https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400)
