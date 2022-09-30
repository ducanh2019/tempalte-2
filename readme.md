npm init -y

npm i -D tailwindcss postcss autoprefixer vite

npx tailwindcss init -p

npx tailwindcss -i ./css/tailwind.css -o ./build/tailwind.css --watch

@tailwind base;
@tailwind components;
@tailwind utilities;