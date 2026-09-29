with open('ru.html', 'r', encoding='utf-8') as f:
    text = f.read()

with open('check_leftovers.txt', 'w', encoding='utf-8') as f:
    if 'Работать со мной' in text: f.write('Работать со мной FOUND\n')
    if 'Как я работаю' in text: f.write('Как я работаю FOUND\n')
    if 'Мой процесс' in text: f.write('Мой процесс FOUND\n')
    if 'Связаться' in text: f.write('Связаться FOUND\n')
    if 'Найти меня везде' in text: f.write('Найти меня везде FOUND\n')
    if 'Активность GitHub' in text: f.write('Активность GitHub FOUND\n')
