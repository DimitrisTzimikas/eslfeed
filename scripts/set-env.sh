#!/usr/bin/env bash

##################################################################
# This set .env variables to production or development environment
##################################################################

APP_JSON_PATH="app.json"
ENV=.env

if test -f "$ENV"; then
    echo "[eslfeed] $ENV exists."
else
  echo "[eslfeed] $ENV does not exist, creating .env file. "
  touch .env
fi


API_URL_POSTS=$(python3 <"$APP_JSON_PATH" -c 'import json,sys;obj=json.load(sys.stdin);print(obj["apiPostsUrl"])')
API_URL_USERS=$(python3 <"$APP_JSON_PATH" -c 'import json,sys;obj=json.load(sys.stdin);print(obj["apiUsersUrl"])')
API_URL_USER_AVATAR=$(python3 <"$APP_JSON_PATH" -c 'import json,sys;obj=json.load(sys.stdin);print(obj["apiUserAvatarUrl"])')

echo "[eslfeed]  copy values to .env"
{
  printf "API_URL_POSTS=\"%s\"\n" "$API_URL_POSTS"
  printf "API_URL_USERS=\"%s\"\n" "$API_URL_USERS"
  printf "API_URL_USER_AVATAR=\"%s\"\n" "$API_URL_USER_AVATAR"
} >>"$ENV"
