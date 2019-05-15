A simple Share-on-Steemit button

All you need to put a simple share-on-Steemit button on a web page. Put everything from the root directory in a directory together somewhere on a server and the example.html should work; you can put the DIV and its contents from the example in your own webpage.

Don't forget to include the <BASE> element from the example.html file in the HEAD of your webpage-to-be-shared as well. This may break other links on your page; the alternative is setting a path to the place where the files in the "remote" directory are stored by hand in many places. I'm working on a better solution for this (trying to avoid server-side configuration).

For now, I am hosting the files that are in the "remote" directory; please host them yourself and edit the <BASE> accordingly.

A working demo can be found at https://ocrdu.nl/sosbtest/example.html.

Note that: - the user must enter their private publishing key, not any other key;
           - there is only minimal input checking;
           - the categories/tags of the posting made are in pagetags.txt;
           - the blurb you want to show for the shared page is in pageblurb.txt;
           - the slugifier that makes the permlink only does Latin, Greek, and Cyrillic alphabets;
           - a preview of the posting is activated by editing the body of the posting.

If you feel like donating for this, you can do so here: ocrdu.nl/donations. The share-on-Steemit button can be seen on that page as well (but it is a dedicated version).