---
layout: article
title: Blog
---

<link rel="stylesheet" href="/css/blog.css">

# My blog

Hey! Did you know I have a blog? Here are my posts:

<ul id="posts-list">
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>, {{ post.author }} • {{ post.date | date_to_long_string }}
            <p>{{ post.excerpt | strip_html }}</p>
        </li>
    {% endfor %}
</ul>