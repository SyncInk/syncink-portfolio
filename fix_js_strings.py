files = ['ru.html', 'bots-ru.html', 'status-ru.html']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace("DAY${streak !== 1 ? 'S' : ''}", "ДН.")
    content = content.replace("${commits} public commits in the last ${days} дней", "${commits} публичных коммитов за последние ${days} дней")
    content = content.replace("Last push: ${lastPush}", "Последний пуш: ${lastPush}")
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
