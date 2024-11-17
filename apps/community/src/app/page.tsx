import { HeroCarousel } from '~/components/hero-carousel';
import { PostCarousel } from '~/components/post-carousel';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <PostCarousel />
    </div>
  );
}
