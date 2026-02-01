# How to Edit Your Website

You can change all the text, images, and project details by editing a single file. You do not need to touch the HTML or CSS.

## 1. Open the Content File
1. Open your project folder: `Documents\company_profile_sandi_Antg`
2. Go into the `src` folder.
3. Open the file named `content.js` with any text editor (Notepad, VS Code, etc.).

## 2. Changing Text
You will see lines that look like this:
```javascript
name: "Krisandi Saptyanto",
headline: "Innovative Software Engineer",
```
To change the text, simply replace the words inside the quotes `""`.
**Example:**
Change:
`headline: "Innovative Software Engineer",`
To:
`headline: "Full Stack Developer",`

## 3. Changing Images
Images are just internet links (URLs). You will see lines like this:
```javascript
image: "https://images.unsplash.com/..."
```

### To use your own photo:
1. **Host it online**: Upload your photo to a site like [Imgur](https://imgur.com/), Google Drop box, or use a LinkedIn photo URL.
   * *Alternative (Local)*: You can put an image file (e.g., `me.jpg`) in the `company_profile_sandi_Antg` folder and use `image: "./me.jpg"`.
2. **Paste the link**: Replace the long https link inside the quotes with your new link.

**Example:**
`image: "https://example.com/my-photo.jpg"`

## 4. Viewing Changes
1. Save the `content.js` file (File > Save or Ctrl+S).
2. Go to your browser where the website is open.
3. **Refresh the page** (F5 or the Refresh button).
4. Your changes will appear instantly!

## Troubleshooting
- **White Screen/Error?** You might have accidentally deleted a quote `"` or a comma `,`. 
- **Fix:** Make sure every piece of text is surrounded by quotes and ends with a comma if it's in a list.
