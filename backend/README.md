## Backend Setup

1. Navigate to backend folder

   ```bash
   cd backend
   ```

2. Install backend dependencies

   ```bash
   npm install
   ```

3. Copy `env.example` to `.env` and update the variables for your environment

   ```bash
   cp .env.example .env
   ```

4. Setup Prisma

   Generate Prisma client:

   ```bash
   npx prisma generate
   ```

   Run database migration:

   ```bash
   npx prisma migrate dev
   ```

5. Run the development server

   ```bash
   npm run start:dev
   ```

6. Run for production

   ```bash
   npm run build
   ```

7. Run production build
   ```bash
   npm run start:prod
   ```
