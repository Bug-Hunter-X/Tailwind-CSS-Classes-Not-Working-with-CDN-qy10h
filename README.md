# Tailwind CSS Classes Not Working with CDN

This repository demonstrates a common issue where Tailwind CSS classes fail to apply even when using the CDN and what seems to be correct class names.  The problem lies in the way the CDN is integrated and how Tailwind interprets the HTML structure. The solution involves using the correct method of importing Tailwind and ensuring the HTML structure is correctly setup for Tailwind to parse and style appropriately.

## Bug Report

The initial code uses the CDN to import Tailwind CSS directly into the HTML file.  However, this approach often leads to styling issues because the Tailwind CSS pre-processor (PostCSS) is not correctly configured. This prevents classes from being compiled into their appropriate CSS styles.

## Solution

The solution involves using a build process and a proper Tailwind CSS configuration file. This ensures that the Tailwind CSS classes are correctly processed and applied to the elements in your HTML.
