A simple Share-on-Steemit button

All you need to put a simple share-on-Steemit button on a web page.

- Put everything from the source files' root directory in the directory where the page you want to share sits;
- Put the contents of the "remote" directory in a directory on a server of your choice;
- Point the SRC of the SCRIPT in the example.html to that directory, and the example.html should work;
- You can then put the DIV and its contents from example.html in your own webpage;
- Edit the pageblurb.txt and pagetags.txt as you see fit.

A working demo can be found at https://ocrdu.nl/sosbtest/example.html.

Note that: - the user must enter their private publishing key, not any other key;
           - there is only minimal input checking, but it keeps the worst crud out;
           - the categories/tags of the posting made are in pagetags.txt;
           - the blurb you want to show for the shared pages is in pageblurb.txt;
           - the slugifier that makes the permlink only does Latin, Greek, and Cyrillic alphabets;
           - a preview of the posting is activated by editing the body of the posting.

If you feel like donating for this, you can do so here: ocrdu.nl/donations. The share-on-Steemit button can be seen on that page as well.