import json
import re

files = ['ru.html', 'bots-ru.html', 'status-ru.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Github Widget JS
    content = content.replace(' public commits in the last ', ' публичных коммитов за последние ')
    content = content.replace('Last push: ', 'Последний пуш: ')
    content = content.replace('>GitHub Pulse<', '>Активность GitHub<')
    content = content.replace(' DAY', ' ДЕНЬ')
    content = content.replace(' DAYS', ' ДНЕЙ')
    
    # Process section
    content = content.replace('How I Work', 'Как я работаю')
    content = content.replace('My process', 'Мой процесс')
    content = content.replace('>Idea<', '>Идея<')
    content = content.replace('Start with a wild idea or a real problem. The crazier the better.', 'Начни с безумной идеи или реальной проблемы. Чем безумнее, тем лучше.')
    content = content.replace('>Design<', '>Дизайн<')
    content = content.replace('Sketch it out, think about UX, then design something that looks clean.', 'Сделать набросок, продумать UX, затем создать стильный дизайн.')
    content = content.replace('>Build<', '>Сборка<')
    content = content.replace('Code it up. Fix the bugs. Code it again. Fix more bugs. Ship it.', 'Написать код. Исправить баги. Снова написать код. Исправить еще баги. Выпустить.')
    content = content.replace('>Iterate<', '>Итерация<')
    content = content.replace('Deploy, get feedback, improve. Never really done — always getting better.', 'Развернуть, получить фидбэк, улучшить. Никогда не заканчиваю — всегда улучшаю.')
    
    # Connect
    content = content.replace('>Connect<', '>Связаться<')
    content = content.replace('Find me everywhere', 'Найти меня везде')
    content = content.replace('Work With Me', 'Работать со мной')
    
    # Skills cards
    content = content.replace('5 years deep. From vanilla DOM to modern frameworks — JS is my first language.', '5 лет опыта. От чистого DOM до современных фреймворков — JS мой первый язык.')
    content = content.replace('>Game Development<', '>Разработка игр<')
    content = content.replace('Building original games with custom engines, physics and wild mechanics.', 'Создание оригинальных игр с кастомными движками, физикой и дикими механиками.')
    content = content.replace('>Web Development<', '>Веб-разработка<')
    content = content.replace('Full-stack web dev — React, Node, clean frontends, solid backends.', 'Full-stack веб-разработка — React, Node, чистый фронтенд, надежный бэкенд.')
    content = content.replace('Scripting, automation, data stuff and backend services.', 'Скриптинг, автоматизация, работа с данными и бэкенд сервисы.')
    content = content.replace('UI/UX & Design', 'UI/UX Дизайн')
    content = content.replace('Designing interfaces that look great on every screen, pixel by pixel.', 'Дизайн интерфейсов, которые отлично смотрятся на каждом экране, пиксель за пикселем.')
    content = content.replace('>Creative Coding<', '>Креативное кодирование<')
    content = content.replace('Canvas, WebGL, generative art — making the browser do things it shouldn\'t.', 'Canvas, WebGL, генеративное искусство — заставляю браузер делать то, чего он не должен.')
    
    # Bots page hero subtitle
    content = content.replace('Handcrafted Discord bots built with performance, simplicity, and community in mind.', 'Discord боты ручной работы, созданные с учетом производительности, простоты и интересов сообщества.')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed missing text with correct case!")
