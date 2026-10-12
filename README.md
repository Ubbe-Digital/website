# Ubbe Digital Website

Sitio estático de [ubbedigital.com](https://ubbedigital.com), publicado en GitHub Pages.
HTML, CSS y JS sin frameworks ni paso de build.

## Estructura

```
site/                 ← todo lo que se publica
  index.html
  404.html
  CNAME               ← dominio personalizado (ubbedigital.com)
  robots.txt, sitemap.xml, favicon.ico
  assets/css/styles.css
  assets/js/main.js
  assets/img/         ← logos, equipo y capturas de Leve Market (WebP)
.github/workflows/pages.yml   ← deploy a GitHub Pages
```

## Desarrollo local

```bash
python3 -m http.server 8080 -d site
# http://localhost:8080
```

## Deploy

Cada push a `master` que toque `site/` publica el sitio con GitHub Actions
(también se puede lanzar a mano desde la pestaña *Actions*).

Configuración única en GitHub → *Settings → Pages*:

1. **Source**: GitHub Actions.
2. **Custom domain**: `ubbedigital.com` y marcar **Enforce HTTPS** cuando GitHub emita el certificado.

### DNS (Namecheap → Advanced DNS)

| Tipo | Host | Valor |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `<usuario-u-organización>.github.io.` |

No tocar los registros de `lm`, `lm-test` ni `vps` (apuntan al VPS de Leve Market),
ni los MX/TXT de reenvío de correo.

## Capturas de Leve Market

Las capturas de `site/assets/img/screens/` se tomaron de la app real (repo Leve Market)
con su mock backend y datos ficticios, en español, a 2x. Escritorio: 1440×900 → 1600 px de ancho.
Móvil: 390×844 → 780 px de ancho.
