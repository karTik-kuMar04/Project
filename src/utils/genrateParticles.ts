export const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 10,
  blur: Math.random() > 0.5 ? 1 : 0,
}));