---
title: "{{ .Name }}"
date: {{ .Date }}
draft: false
tags: []
categories: []
name: "{{ replace .Name "-" " " | title }}"
joined: {{ .Date }}
role: [
        "Coach",
        "Committee",
        "Parent",
        "Swimmer"
    ]
squad: [
        "Senior","Junior Racers","Development","State"
    ]
email: ""
phone: ""
---