# Patricia Ortiz · Psicologia

Web profesional, estática y bilingüe (catalán por defecto / español) para la
psicóloga Patricia Ortiz. Single-page con scroll suave, animaciones smooth y
formulario de contacto vía EmailJS.

## Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [react-i18next](https://react.i18next.com/) — internacionalización (ca / es)
- [Framer Motion](https://www.framer.com/motion/) — animaciones
- [EmailJS](https://www.emailjs.com/) — envío de correo desde el cliente
- [react-icons](https://react-icons.github.io/react-icons/) — iconos

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173/patriciaortizpsicologia-web/
npm run build    # build de producción en dist/
npm run preview  # sirve el build de producción localmente
```

> El proyecto usa `node` desde `node.exe` (Windows). Si `node` no está en el
> PATH de WSL, asegúrate de tener un wrapper en `~/.local/bin/node`.

## Contenido y personalización

- **Textos**: `src/i18n/ca.json` (catalán) y `src/i18n/es.json` (español).
  Mantén las mismas claves en ambos ficheros.
- **Datos de contacto** (email, teléfono, WhatsApp, Instagram):
  `src/data/site.ts`.
- **Servicios / estudios / cursos**: las claves se listan en `src/data/site.ts`
  y los textos en los JSON de i18n.
- **Fotos**: actualmente hay placeholders (`ImagePlaceholder`). Para poner fotos
  reales, coloca las imágenes en `src/assets/` e impórtalas, sustituyendo
  `<ImagePlaceholder ... />` por `<img src={...} alt={...} />` en `Hero.tsx` y
  `QuiSoc.tsx`.
- **Paleta y tipografías**: variables CSS en `src/styles/index.css`.

## EmailJS (formulario de contacto)

1. Crea una cuenta gratuita en [emailjs.com](https://www.emailjs.com/).
2. Crea un **Service** y un **Email Template**. La plantilla debe usar las
   variables del formulario: `user_name`, `user_email`, `message`.
3. Copia `.env.example` a `.env` y rellena:

   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

Si no se configuran, el formulario valida los campos pero muestra un aviso de
"no configurado" en lugar de enviar (los enlaces directos de correo/WhatsApp
siguen funcionando).

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` construye y publica automáticamente
en cada push a `main`.

1. En el repo: **Settings → Pages → Build and deployment → Source: GitHub
   Actions**.
2. En **Settings → Secrets and variables → Actions**, añade los tres secrets:
   `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
   `VITE_EMAILJS_PUBLIC_KEY`.
3. Haz push a `main`. La web quedará en
   `https://<usuario>.github.io/patriciaortizpsicologia-web/`.

> El `base` en `vite.config.ts` está fijado a `/patriciaortizpsicologia-web/`. Si el repo tiene
> otro nombre, ajústalo.

### Migrar a dominio propio (futuro)

1. En `vite.config.ts`, cambia `base: '/patriciaortizpsicologia-web/'` a `base: '/'`.
2. Crea `public/CNAME` con el dominio (ej. `patriciaortiz.com`).
3. Actualiza la redirección en `public/404.html` a `/`.
4. Configura el dominio en **Settings → Pages → Custom domain** y los registros
   DNS según indique GitHub.
