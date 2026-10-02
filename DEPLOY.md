# 배포 방법

## 가장 쉬운 열기

`열기.html`을 더블클릭하면 `index.html`을 엽니다.

## 로컬 서버로 열기

```powershell
cd C:\Users\Admin\Downloads\chatgpt\music-video-director
npm start
```

그다음 브라우저에서 엽니다.

```text
http://localhost:8787/
```

## GitHub에 올리기

```powershell
cd C:\Users\Admin\Downloads\chatgpt\music-video-director
git init
git add .
git commit -m "Initial music video director app"
git branch -M main
git remote add origin https://github.com/YOUR_ID/YOUR_REPO.git
git push -u origin main
```

## GitHub Pages로 공개 링크 만들기

1. GitHub 저장소로 이동
2. `Settings` → `Pages`
3. `Build and deployment`에서 `Deploy from a branch`
4. Branch: `main`, Folder: `/root`
5. 저장 후 표시되는 Pages URL 사용

## Vercel에 올리기

1. https://vercel.com 에 로그인
2. `Add New...` → `Project`
3. GitHub 저장소 Import
4. Framework Preset은 `Other`
5. Build Command는 비워둠
6. Output Directory도 비워둠
7. Deploy

배포 후 Vercel이 제공하는 URL을 사용하면 됩니다.
