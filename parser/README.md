# A5000Stat — парсер статистики 4bit.online

## Установка

```bash
pip install -r parser/requirements.txt
playwright install chromium
```

## Запуск

```bash
python parser/scrape_4bit.py
```

Скрипт откроет Chromium, перейдёт на https://4bit.online,
подождёт 5 секунд и сохранит скриншот в `parser/debug_home.png`.
