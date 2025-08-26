FROM node:18-alpine

# Install dumb-init
RUN apk add --no-cache dumb-init

# Create app user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S astrojs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install ALL dependencies (needed for build)
RUN npm install

# Copy source code
COPY . .

# Build the Astro application
RUN npm run build

# Remove dev dependencies after build
RUN npm prune --production

# Change ownership
RUN chown -R astrojs:nodejs /app

USER astrojs

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the server
CMD ["node", "./dist/server/entry.mjs"]