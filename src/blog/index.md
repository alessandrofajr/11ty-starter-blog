---
layout: default
title: blog
pagination:
  data: collections.blog
  size: 2
  reverse: true
  alias: posts
---

## Blog
<ul>
{% for post in pagination.items %}
<li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date | date: "%d-%m-%Y" }}</li>
{% endfor %}
</ul>

<nav>
  {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">Página anterior</a>
  {% else %}
  {% endif %}
  {% if pagination.href.next %}
    <a href="{{ pagination.href.next }}">Próxima página</a>
  {% else %}
  {% endif %}
</nav>