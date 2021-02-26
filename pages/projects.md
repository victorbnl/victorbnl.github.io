---
layout: article
title: Projects
permalink: /projects
---

# My projects

Here is a list of my main projects. Of course they are not all listed here, go on my GitHub to see all the repository I have!

<ul>
    {% for project in site.projects %}
        <li>
            <a href="{{ project.url }}">{{ project.title }}</a>, {{ project.description }}
        </li>
    {% endfor %}
</ul>