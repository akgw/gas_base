FILE_PATH="public/bundle.html"

if [ ! -e $FILE_PATH ]; then
    echo $FILE_PATH"にファイルがありません。"
    exit
fi

Executed=`cat $FILE_PATH | grep "</script>"|wc -l`

if [ $Executed -gt 0 ]; then
    echo $FILE_PATH"にはすでに"
    exit
fi

LF=$(printf '\\\012_')
LF=${LF%_}
sed -i "" "1s/^/<script>${LF}/" $FILE_PATH

echo "</script>" >> $FILE_PATH
