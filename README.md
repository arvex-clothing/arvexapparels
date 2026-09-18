# Arvex Apparels — website

A static, multi-page B2B site for Arvex Apparels (sportswear & streetwear
manufacturing). Pure HTML/CSS/JS — no build step, no backend — built to
deploy directly on GitHub Pages.

## Folder structure

```
arvex-apparels/
├── index.html        Home
├── sportswear.html    Sportswear division
├── streetwear.html    Streetwear division
├── about.html         Company / capabilities
├── services.html      B2B process & services
├── contact.html        Inquiry form + direct contact
├── style.css          Shared styles (all pages)
├── script.js          Shared behaviour (nav, reveals, form)
└── README.md
```

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it
   (these files should sit at the **root** of the repo, or in `/docs` —
   your choice).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a
   branch**, pick the `main` branch and the `/ (root)` folder (or `/docs`
   if you used that).
4. Save. GitHub gives you a URL like
   `https://yourusername.github.io/arvex-apparels/` within a minute or two.
5. If you want a custom domain (e.g. `arvexapparels.com`), add it under
   **Settings → Pages → Custom domain** and follow GitHub's DNS
   instructions.

## Connecting the inquiry form (required)

GitHub Pages can't run server code, so the form on `contact.html` needs a
third-party form endpoint to actually deliver submissions to your email.
Both options below are free for normal inquiry volumes:

**Option A — Formspree**
1. Go to formspree.io and create a free account.
2. Create a new form, set the destination to `arvexclothing.co@gmail.com`.
3. Copy the endpoint it gives you (looks like
   `https://formspree.io/f/xxxxxxx`).
4. In `contact.html`, find:
   `<form id="inquiry-form" action="REPLACE_WITH_YOUR_FORM_ENDPOINT" method="POST">`
   and replace `REPLACE_WITH_YOUR_FORM_ENDPOINT` with that URL.

**Option B — Web3Forms**
1. Go to web3forms.com and generate a free access key with
   `arvexclothing.co@gmail.com`.
2. Add a hidden field inside the `<form>` in `contact.html`:
   `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">`
3. Set the form's `action` to `https://api.web3forms.com/submit`.

Until you do this, the form will show a message telling visitors the
endpoint isn't connected yet, instead of silently failing.

## Swapping in real photography

Most product tiles and banners use generated gradient/texture placeholders
(see `--sport-tex`, `--street-tex`, and `.tile.t1`–`.t6` in `style.css`) so
the site works immediately with no broken image links. The About page uses
one real (freely licensed, no-attribution-required) demo photo from Pexels
in a `.photo-duotone` panel, tinted to match the brand palette — swap it
for your own factory photo the same way.

To use real photos:
- In `sportswear.html` / `streetwear.html`, each `<div class="tile t...">`
  can be replaced with `<div class="tile" style="background-image:url('assets/your-photo.jpg')"></div>`.
- For the home page category cards and page banners, replace the
  `--sport-tex` / `--street-tex` CSS variables in `style.css` with
  `url('assets/your-photo.jpg')`.
- For a `.photo-duotone` panel (used on the About page), replace the
  `<img src="...">` inside it with your own photo — the brand-color tint
  is applied automatically by the CSS, so any photo will match the palette.
- An empty `assets/` folder is included — drop images there and reference
  them as `assets/filename.jpg`.

## Editing contact details

WhatsApp, email and Instagram appear in the floating WhatsApp button, the
header quote link, and every page's footer. To change them, search each
HTML file for:
- `923256145964` (WhatsApp number, used in `wa.me` links)
- `arvexclothing.co@gmail.com`
- `arvexapparels` (Instagram handle/URL)

## Browser support

Plain CSS/JS, no frameworks. Works in all modern browsers; layout degrades
gracefully on narrow screens via the responsive rules in `style.css`.
