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


