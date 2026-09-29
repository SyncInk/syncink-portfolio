import re
with open('ru.html', 'r', encoding='utf-8') as f:
    text = f.read()

with open('about_out.txt', 'w', encoding='utf-8') as f:
    for m in re.finditer(r'<p class="about-text">.*?</p>', text, re.DOTALL):
        f.write(m.group(0) + '\n')
