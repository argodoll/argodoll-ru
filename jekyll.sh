#!/bin/bash

open http://localhost:4000
bundle exec jekyll serve --watch --drafts --safe --host 0.0.0.0
