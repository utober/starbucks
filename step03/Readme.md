# Step03: Git

## VCS(버전관리)
1. git-scm.com > download
2. git --version
3. git-hub.com > SingUp

## Git (Local)
1. git init
2. git config --global core.autocrlf true  [개행문자설정]
3. git config --global user.name 'USERNAME'
4. git config --global user.email 'EMAIL' 
5. git config --global --list
6. git status
7. git add . [변경사항을추정할특정파일지정/Stage]
8. git status
9. git commit -m 'Start Project' [프로젝트생성/버전관리]
10. git log

* Git (Repository)
  - Create a new reopsitory :: STARBUCKS
  - 원격주소: https://github.com/utober/starbucks.git

11. git remote add origin https://github.com/utober/starbucks.git [원격저장소/연결]
12. git push origin master [원격저장소/업로드]

* 수정사항 적용
13. git status
14. git add .
15. git commit -m '초기화면 경로 변경'
16. git log
17. git add . [새로운내용추가]
18. git commit -m '새로운 파일 추가'
19. git push origin master 

## Netlify.com  [https://stupefied-roentgen-d3762f.netlify.app]
1. netlify.com > LogIn
2. Create a new site > GitHub


## Git [branch 관리]
1. git branch     => master   : (branch목록)
2. git branch -a  => remotes/origin/master 
3. git branch signin  => signin 브랜치 
4. git branch
    + * master
    +   signin
5. git checkout signin  => Switched to branch 'signin'
6. git branch
    +   master
    + * signin
7. [signin] file 생성 및 수정
8. git add .
9. git commit -m "공통 모듈 분리"
10. github.com/myRepo   => merge 

11. git log
12. git reset --hard HEAD~1     // 1 버전 뒤로 돌리기
13. git reset --hard ORIG_HEAD  // 되돌리기 (위에서 진행한 작업)
14. git reset --hard HEAD~2     // 2개 버전 뒤로 돌리기

15. git branch purple
16. git branch
17. git checkout purple
18. github.com > create new repository
19. git remote add origin https://주소
20. git push origin master 
21. git checkout purple
22. git push origin purple


## 다른 환경에서 시작하기
1. github.com > 복사 (master) 
2. git clone https://복사한 주소
3. git branch > * master 만 존재
4. git branch -r : (원격저장소 브랜치 리스트)
5. git checkout -t origin/purple   (purple 브랜치 가져옴)
6. git branch 
7. git checkout master
8. git branch -d purple (purple 삭제)
9. git branch yellow (yellow branch 생성)
10. git checkout yellow
10. git checkout master
11. git branch -d yellow
12. git branch
13. [생성과동시에이동] git checkout -b yellow
14. git push origin yellow => github.com에 upload 

## 버전 충돌 상황
* windows에서 작업
1. [master] h1내용 수정
2. git add .
3. git commit -m 'master에서 내용수정'
4. git push origin master

* Mac에서 작업
1. [master] h1내용 수정
2. git add .
3. git commit -m 'Mac master에서 내용 수정'
4. git push origin master ==> hint: Updates were rejected because ...
5. git reset --hard HEAD~1
6. [원격저장소내용가져옴] git pull origin master
7. 차이점 수정






. [복제] git clone 가져올주소
11. vscode 
    + vscode . 
    + vscode . -r (현재 프로젝프로 열기)



