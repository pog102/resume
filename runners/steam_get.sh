rm links.html
RECENT_GAMES=$(curl "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=$steam_api&steamid=$steam_user&count=3")
GAME_IDS=$(echo "${RECENT_GAMES}" | jq -r '.response.games[] | .appid' | tac | awk '{print $1}')
for game_id in $GAME_IDS; do
   echo "https://steamcdn-a.akamaihd.net/steam/apps/${game_id}/library_600x900_2x.jpg" >> links.html
done
