<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="news-view view">
      {% for item in list %}
        <div class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
          <span>{{ helper.relativeTime(item.time) }}</span>
        </div>
      {% endfor %}
    </div>
  </body>
</html>