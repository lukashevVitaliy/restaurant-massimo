import Featured from '@/components/Featured';
import Offer from '@/components/offer';
import Slider from '@/components/Slider';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
