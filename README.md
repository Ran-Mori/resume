# Yi Zheng - Portfolio Website

This is the personal portfolio website for **Yi Zheng**, a Senior Android Engineer at ByteDance. It acts as a digital resume, showcasing professional experience, technical skills, and featured projects. The site is built with modern web technologies, ensuring a high-performance and responsive user experience.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Linting:** ESLint

## 📂 Project Structure

```
resume/
├── public/          # Static assets (images, etc.)
├── src/
│   ├── app/         # Next.js App Router pages and layouts
│   ├── assets/      # Project-specific assets (logos, etc.)
│   ├── components/  # Reusable UI components
│   └── lib/         # Data definitions (resume data)
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- Package manager (npm, yarn, or pnpm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ran-Mori/resume.git
   cd resume
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running Locally

Start the development server to view the website:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Scripts

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (requires a build first).
- \`npm run lint\`: Runs ESLint to check for code quality issues.

## 🚀 One-Click Deployment

This project includes a shell script for seamless deployment to a remote server (Ubuntu/Debian recommended).

### Prerequisites

- A remote server with **SSH access** (preferably \`root\` user).
- The server's IP address.

### Usage

1.  **Make the script executable** (first time only):

    \`\`\`bash
    chmod +x deploy_remote.sh
    \`\`\`

2.  **Run the deployment script**:

    \`\`\`bash
    ./deploy_remote.sh <YOUR_SERVER_IP>
    \`\`\`

    Example:
    \`\`\`bash
    ./deploy_remote.sh 1.2.3.4
    \`\`\`

    If you don't provide an IP address, the script will prompt you to enter one.

### What the Script Does

1.  **Syncs Files**: Uploads the project code to \`/var/www/resume\` on the remote server using \`rsync\`.
2.  **Installs Dependencies**: Automatically installs **Node.js (v20)**, **npm**, and **PM2** on the server if missing.
3.  **Builds the App**: Runs \`npm install\` and \`npm run build\` on the server.
4.  **Starts the Service**: Uses **PM2** to start the application on **port 80** and configures it to restart on boot.

## 👤 Author

**Yi Zheng**

- **Role:** Senior Android Engineer
- **Company:** ByteDance (Doubao, Douyin)
- **GitHub:** [Ran-Mori](https://github.com/Ran-Mori)

## 📄 License

&copy; 2026 Yi Zheng. All rights reserved.

## Thanks

[Brittany Chiang](https://brittanychiang.com/)
