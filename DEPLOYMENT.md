# Hostinger pe Deploy Karne ke Steps

## Step 1: Production Build Banana

Terminal mein yeh command run karo:

```bash
npm run build
```

Yeh `dist` folder create karega jismein production-ready files hongi.

## Step 2: Hostinger pe Upload Karna

### Option A: File Manager se (Easiest)

1. **Hostinger Control Panel** mein login karo
2. **File Manager** open karo
3. `public_html` folder mein jao (ya jo bhi domain ka root folder ho)
4. **Dist folder ki saari files** upload karo:
   - `dist` folder ki **andar ki saari files** (folder nahi, sirf files)
   - `.htaccess` file bhi upload karo (root mein)
5. Files upload hone ke baad, permissions check karo

### Option B: FTP se (Faster for large files)

1. **FTP Client** (FileZilla, WinSCP) install karo
2. Hostinger se **FTP credentials** lelo:
   - FTP Host: `ftp.yourdomain.com` ya IP address
   - Username: Hostinger se milega
   - Password: Hostinger se milega
   - Port: 21 (default)
3. Connect karo aur `public_html` folder mein jao
4. `dist` folder ki saari files upload karo
5. `.htaccess` file bhi upload karo

## Step 3: Important Files Check

Upload ke baad ensure karo ki yeh files root mein hain:
- ✅ `index.html`
- ✅ `.htaccess` (hidden file, make sure it's uploaded)
- ✅ `assets/` folder (CSS, JS files)
- ✅ `public/` folder ki saari images/videos

## Step 4: Path Issues Fix Karna

Agar images/videos nahi dikh rahe, to check karo:

1. **Public folder** ki files directly `dist` folder mein copy karni pad sakti hain
2. Ya `vite.config.js` mein base path set karo:

```js
export default defineConfig({
  base: '/',
  // ... rest of config
})
```

## Step 5: Testing

1. Browser mein apna domain open karo
2. Saari pages check karo (Home, About, Services, etc.)
3. Images aur videos load ho rahe hain ya nahi check karo
4. Mobile view bhi test karo

## Common Issues aur Solutions

### Issue 1: 404 Error on Page Refresh
**Solution:** `.htaccess` file properly upload ho gaya hai ya nahi check karo

### Issue 2: Images/Videos nahi dikh rahe
**Solution:** 
- Public folder ki files `dist` folder mein copy karo
- Ya paths check karo (should start with `/` not `./`)

### Issue 3: White Screen
**Solution:**
- Browser console mein errors check karo
- Build properly hua hai ya nahi check karo (`npm run build` dobara run karo)

### Issue 4: Slow Loading
**Solution:**
- Images optimize karo
- Lazy loading already implemented hai, check karo

## Quick Commands

```bash
# Build create karna
npm run build

# Build preview (local testing)
npm run preview

# Production build check karna
cd dist
# Simple HTTP server run karo (optional)
```

## Notes

- ✅ `.htaccess` file React Router ke liye zaroori hai
- ✅ `dist` folder ki **contents** upload karni hain, folder nahi
- ✅ Public folder ki files automatically `dist` mein copy ho jayengi
- ✅ First time deploy ke baad 5-10 minutes wait karo (DNS propagation)

## Support

Agar koi issue aaye to:
1. Browser console check karo (F12)
2. Hostinger error logs check karo
3. Build process verify karo

