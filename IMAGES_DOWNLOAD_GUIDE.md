# Bibeebiz Website Images Download Guide

## Images to Download:

### Team Photos (assets/images/team/)
1. `john-smith-ceo.jpg` - https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
2. `sarah-johnson-cto.jpg` - https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
3. `mike-chen-developer.jpg` - https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80

### Service Icons (assets/images/services/)
4. `software-development.jpg` - https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
5. `cloud-solutions.jpg` - https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
6. `ai-analytics.jpg` - https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
7. `it-consulting.jpg` - https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
8. `cybersecurity.jpg` - https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80
9. `support-maintenance.jpg` - https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80

### Portfolio Projects (assets/images/portfolio/)
10. `ecommerce-platform.jpg` - https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80
11. `analytics-dashboard.jpg` - https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80
12. `mobile-health-app.jpg` - https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80
13. `ai-chatbot.jpg` - https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80
14. `cloud-migration.jpg` - https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80
15. `security-system.jpg` - https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80

### Hero Background (assets/images/)
16. `hero-background.jpg` - https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80

## Download Instructions:

### Method 1: Browser Download
1. Copy each URL above
2. Paste in browser and download the image
3. Rename to the filename specified
4. Save in the appropriate folder

### Method 2: Terminal Download (macOS/Linux)
```bash
cd /Users/tuandang/personal/research/AI/bibeebiz/website/assets/images

# Create subdirectories
mkdir -p team services portfolio

# Download team photos
curl -L "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o team/john-smith-ceo.jpg
curl -L "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o team/sarah-johnson-cto.jpg
curl -L "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o team/mike-chen-developer.jpg

# Download service icons
curl -L "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o services/software-development.jpg
curl -L "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o services/cloud-solutions.jpg
curl -L "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o services/ai-analytics.jpg
curl -L "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o services/it-consulting.jpg
curl -L "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o services/cybersecurity.jpg
curl -L "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o services/support-maintenance.jpg

# Download portfolio images
curl -L "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o portfolio/ecommerce-platform.jpg
curl -L "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o portfolio/analytics-dashboard.jpg
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o portfolio/mobile-health-app.jpg
curl -L "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o portfolio/ai-chatbot.jpg
curl -L "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" -o portfolio/cloud-migration.jpg
curl -L "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o portfolio/security-system.jpg

# Download hero background
curl -L "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o hero-background.jpg
```

## Benefits of Local Images:
- ✅ Faster loading times
- ✅ No external dependencies
- ✅ Better reliability
- ✅ Can be optimized for web
- ✅ No bandwidth costs
- ✅ Full control over assets

## After Downloading:
Run the curl commands above or download manually, then let me know when done and I'll update all the HTML files to use the local image paths.
