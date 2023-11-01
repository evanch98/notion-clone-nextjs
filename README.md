# notion-clone-nextjs

![GitHub repo size](https://img.shields.io/github/repo-size/evanch98/notion-clone-nextjs)
![GitHub stars](https://img.shields.io/github/stars/evanch98/notion-clone-nextjs?style=social)
![GitHub forks](https://img.shields.io/github/forks/evanch98/notion-clone-nextjs?style=social)

<br />
November, 2023. <br />
A Notion Clone web application built with Next.js, React, Tailwind CSS, TypeScript, Convex, Clerk Auth, Edge Store, and Zustand.

## Features
- Create, edit, and organize notes in a Notion-like interface.
- Real-time updates for editing using Convex.
- User authentication and management with Clerk Auth.
- File upload and storage using Edge Store.
- Responsive design with Tailwind CSS.
- State management using Zustand.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

1. **Clone the repository:**
```bash
git clone https://github.com/evanch98/notion-clone-nextjs.git
cd your-repo-name
```

2. **Install the required dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env.local` file in the project root and set the necessary environment variables.
```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Start building and customizing your Notion Clone!**

## Technologies Used
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Convex](https://www.convex.dev/)
- [Clerk Auth](https://clerk.com/)
- [Edge Store](https://edgestore.dev/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

## Acknowledgements
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority)
- [clsx](https://www.npmjs.com/package/clsx)
- [cmdk](https://www.npmjs.com/package/cmdk)
- [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react)
- [lucide-react](https://www.npmjs.com/package/lucide-react)
- [react-dropzone](https://www.npmjs.com/package/react-dropzone)
- [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)
- [sonner](https://www.npmjs.com/package/sonner)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts)
- [zod](https://www.npmjs.com/package/zod)