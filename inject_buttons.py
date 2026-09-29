files_en = ['index.html', 'status.html', 'bots.html']
files_ru = ['ru.html', 'status-ru.html', 'bots-ru.html']

for file in files_en + files_ru:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine which language button to show
    if file in files_ru:
        # We are in Russian, link to English
        target = file.replace('-ru', '').replace('ru.html', 'index.html')
        btn = f'''
      <a href="{target}" class="theme-toggle" aria-label="Switch to English" title="English language" style="text-decoration:none;">
        <span style="font-family:'JetBrains Mono', monospace; font-size:0.75rem; font-weight:700;">EN</span>
      </a>'''
    else:
        # We are in English, link to Russian
        target = file.replace('.html', '-ru.html').replace('index-ru.html', 'ru.html')
        btn = f'''
      <a href="{target}" class="theme-toggle" aria-label="Switch to Russian" title="Русский язык" style="text-decoration:none;">
        <span style="font-family:'JetBrains Mono', monospace; font-size:0.75rem; font-weight:700;">RU</span>
      </a>'''
      
    # Clean up old btn if it exists (from my previous failed attempts if any)
    # Actually we restored the commit so it doesn't exist.
    
    if 'id="settingsBtn"' in content:
        if '>RU</span>' not in content and '>EN</span>' not in content:
            content = content.replace('<button class="theme-toggle" id="settingsBtn"', btn + '\n      <button class="theme-toggle" id="settingsBtn"')
    elif 'id="themeToggle"' in content:
        if '>RU</span>' not in content and '>EN</span>' not in content:
            content = content.replace('<button class="theme-toggle" id="themeToggle"', btn + '\n      <button class="theme-toggle" id="themeToggle"')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Injected buttons safely.")
