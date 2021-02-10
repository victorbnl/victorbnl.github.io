---
layout: article
title: Blog
permalink: /blog
---

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

<style>
    #posts-list li p {
        margin-top: 0.4em;
        color: #4a4a4a;
    }
</style>