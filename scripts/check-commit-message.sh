#!/bin/bash

# 커밋 메시지 컨벤션 검사
# 형식: type(scope): subject (#issue number)
pattern="^(feat|fix|docs|style|refactor|chore|design)\([a-zA-Z0-9-_]+\): .+ \(#\d+\)$"

# 커밋 메시지 가져오기
commit_message=$(git log -1 --pretty=format:%s)

if [[ $commit_message =~ $pattern ]]; then
  echo "🙆🏻‍♀️ 올바른 커밋 메시지 형식입니다"
  exit 0
else
  echo "🙆🏻‍♀️ 커밋 메시지 형식을 지켜 주세요!"
  echo "메시지 형식: type(scope): subject (#issue number)"
  exit 1
fi
