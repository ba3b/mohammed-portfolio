"use client"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "react-native-performance-optimization",
    title: "React Native Performance Optimization: Lessons from Production",
    excerpt:
      "Key strategies I learned while optimizing the SOP Management App at Ventionex, including bundle size reduction and memory management.",
    content: `
# React Native Performance Optimization: Lessons from Production

Working on the SOP Management App at Ventionex taught me valuable lessons about React Native performance optimization. Here are the key strategies that made a significant impact.

## Bundle Size Optimization

One of the first challenges we faced was the app's initial bundle size. With multiple screens and complex navigation, the bundle grew quickly.

### Code Splitting with React.lazy()

\`\`\`typescript
const SOPListScreen = React.lazy(() => import('./screens/SOPListScreen'))
const SOPDetailScreen = React.lazy(() => import('./screens/SOPDetailScreen'))
\`\`\`

This reduced our initial bundle size by 40% and improved startup time significantly.

## Memory Management

Memory leaks were causing crashes on older devices. Here's what we implemented:

### Proper Cleanup in useEffect

\`\`\`typescript
useEffect(() => {
  const subscription = eventEmitter.addListener('sopUpdate', handleUpdate)
  
  return () => {
    subscription.remove()
  }
}, [])
\`\`\`

## Image Optimization

Large images were consuming too much memory. We implemented:

- WebP format for Android
- Proper image caching
- Lazy loading for list items

The results were impressive: 60% reduction in memory usage and smoother scrolling.

## Conclusion

Performance optimization is an ongoing process. These techniques helped us deliver a smooth experience for Ventionex's users across various device types.
    `,
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React Native", "Performance", "Mobile Development"],
    featured: true,
  },
  {
    slug: "flutter-vs-react-native-2024",
    title: "Flutter vs React Native in 2024: A Developer's Perspective",
    excerpt:
      "Having worked with both frameworks extensively, here's my honest comparison of Flutter and React Native for mobile app development.",
    content: `
# Flutter vs React Native in 2024: A Developer's Perspective

After working with both Flutter and React Native in various projects, I want to share my honest perspective on these two leading cross-platform frameworks.

## Development Experience

### React Native
- Familiar JavaScript/TypeScript ecosystem
- Hot reload for rapid development
- Large community and extensive libraries

### Flutter
- Dart language learning curve
- Excellent hot reload and debugging tools
- Comprehensive widget system

## Performance Comparison

In my experience with the SOP Management App (React Native) and other Flutter projects:

### React Native
- Good performance for most use cases
- Bridge communication can be a bottleneck
- Native modules integration is straightforward

### Flutter
- Consistently smooth 60fps animations
- Direct compilation to native code
- Better performance for complex UIs

## When to Choose What

**Choose React Native when:**
- Your team has strong JavaScript/React experience
- You need extensive third-party integrations
- Rapid prototyping is a priority

**Choose Flutter when:**
- Performance is critical
- You want pixel-perfect UI consistency
- You're building a complex, animation-heavy app

## Conclusion

Both frameworks are excellent choices. The decision often comes down to team expertise and project requirements rather than technical superiority.
    `,
    publishedAt: "2024-02-20",
    readTime: "6 min read",
    tags: ["Flutter", "React Native", "Comparison", "Mobile Development"],
    featured: true,
  },
  {
    slug: "building-scalable-mobile-architecture",
    title: "Building Scalable Mobile App Architecture",
    excerpt: "Architectural patterns and principles I've learned from working on enterprise mobile applications.",
    content: `
# Building Scalable Mobile App Architecture

Enterprise mobile applications require careful architectural planning. Here are the patterns and principles I've found most effective.

## Clean Architecture Principles

### Separation of Concerns
- Presentation Layer (UI Components)
- Business Logic Layer (Use Cases)
- Data Layer (Repositories, APIs)

### Dependency Inversion
Using dependency injection to maintain loose coupling between layers.

## State Management

For complex apps like the SOP Management system, proper state management is crucial:

### Redux Toolkit (React Native)
\`\`\`typescript
const sopSlice = createSlice({
  name: 'sop',
  initialState,
  reducers: {
    setSops: (state, action) => {
      state.sops = action.payload
    }
  }
})
\`\`\`

### BLoC Pattern (Flutter)
Provides excellent separation between UI and business logic.

## Testing Strategy

### Unit Tests
- Business logic validation
- Utility function testing
- State management testing

### Integration Tests
- API integration testing
- Navigation flow testing
- Critical user journey testing

## Conclusion

Scalable architecture requires upfront planning but pays dividends as your application grows. These patterns have served me well in production applications.
    `,
    publishedAt: "2024-03-10",
    readTime: "10 min read",
    tags: ["Architecture", "Mobile Development", "Best Practices"],
    featured: false,
  },
]
