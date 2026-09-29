files = ['ru.html', 'bots-ru.html', 'status-ru.html']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix bot names back to English
    content = content.replace('SyncInk© Радио', 'SyncInk© Radio')
    content = content.replace('Билет SyncInk©', 'SyncInk© Ticket')
    content = content.replace('SyncInk© Голос', 'SyncInk© Voice')
    content = content.replace('SyncInk Голос', 'SyncInk Voice')
    content = content.replace('Билет SyncInk', 'SyncInk Ticket')
    content = content.replace('SyncInk Радио', 'SyncInk Radio')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Restored bot names!")
