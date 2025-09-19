# Vercel Deployment Guide for Aura Shield Identity

## Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. GitHub account with access to the repository
3. Environment variables ready

## Step-by-Step Deployment Instructions

### Step 1: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub: `NeoDefi/aura-shield-identity`
4. Click "Import" to connect the repository

### Step 2: Configure Project Settings

1. **Framework Preset**: Select "Vite"
2. **Root Directory**: Leave as default (./)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### Step 3: Environment Variables Configuration

In the Vercel dashboard, go to Settings > Environment Variables and add:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
VITE_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
VITE_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

**Important**: Make sure to add these for all environments (Production, Preview, Development)

### Step 4: Build Configuration

1. Go to Settings > General
2. Set **Node.js Version**: 18.x
3. Set **Build Command**: `npm run build`
4. Set **Output Directory**: `dist`
5. Set **Install Command**: `npm install`

### Step 5: Domain Configuration (Optional)

1. Go to Settings > Domains
2. Add your custom domain if desired
3. Configure DNS settings as instructed by Vercel

### Step 6: Deploy

1. Click "Deploy" button
2. Wait for the build process to complete
3. Your application will be available at the provided Vercel URL

### Step 7: Automatic Deployments

- **Production**: Automatically deploys from `main` branch
- **Preview**: Automatically deploys from pull requests
- **Development**: Automatically deploys from other branches

## Post-Deployment Configuration

### 1. Verify Environment Variables

Check that all environment variables are properly set in the Vercel dashboard.

### 2. Test Wallet Connection

1. Open the deployed application
2. Click "Connect Wallet" button
3. Verify that wallet connection works properly
4. Test on Sepolia testnet

### 3. Monitor Performance

1. Check Vercel Analytics for performance metrics
2. Monitor build logs for any errors
3. Set up monitoring alerts if needed

## Troubleshooting

### Common Issues:

1. **Build Failures**: Check Node.js version (should be 18.x)
2. **Environment Variables**: Ensure all required variables are set
3. **Wallet Connection Issues**: Verify WalletConnect Project ID
4. **Network Issues**: Check RPC URL configuration

### Debug Steps:

1. Check build logs in Vercel dashboard
2. Verify environment variables are correctly set
3. Test locally with same environment variables
4. Check browser console for errors

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to repository
2. **API Keys**: Use Vercel's environment variable system
3. **Wallet Security**: Ensure proper wallet connection validation
4. **HTTPS**: Vercel automatically provides HTTPS

## Performance Optimization

1. **Build Optimization**: Vite automatically optimizes builds
2. **CDN**: Vercel provides global CDN
3. **Caching**: Configure appropriate cache headers
4. **Image Optimization**: Use Vercel's image optimization features

## Monitoring and Analytics

1. **Vercel Analytics**: Enable for performance monitoring
2. **Error Tracking**: Set up error monitoring
3. **Uptime Monitoring**: Configure uptime checks
4. **Performance Metrics**: Monitor Core Web Vitals

## Backup and Recovery

1. **Code Backup**: Repository is backed up on GitHub
2. **Environment Backup**: Export environment variables
3. **Database Backup**: If using external database
4. **Configuration Backup**: Document all settings

## Support

For issues with deployment:

1. Check Vercel documentation
2. Review build logs
3. Test locally first
4. Contact Vercel support if needed

## Success Criteria

✅ Application loads without errors
✅ Wallet connection works
✅ Environment variables are properly configured
✅ Build completes successfully
✅ Performance metrics are acceptable
✅ HTTPS is enabled
✅ Custom domain works (if configured)

## Next Steps After Deployment

1. Test all functionality
2. Configure monitoring
3. Set up CI/CD pipeline
4. Plan for scaling
5. Document deployment process
