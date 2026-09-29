import re
with open('bots-ru.html', 'r', encoding='utf-8') as f:
    text = f.read()

with open('dump.txt', 'w', encoding='utf-8') as f:
    for m in re.finditer(r'.{0,30}SyncInk©.{0,30}', text, re.IGNORECASE):
        f.write(m.group(0) + '\n')
