"use client";

import { motion } from "framer-motion";
import Polaroid from "@/components/Polaroid";
import { scrapbookPhotos } from "@/data/site";
import { softReveal } from "@/lib/animations";

export default function GallerySection() {
  return (
    <div className="relative overflow-hidden px-5 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(233,165,173,.18),transparent_24%),linear-gradient(145deg,rgba(255,244,223,.08),rgba(8,8,15,.8))]" />
      <motion.div className="relative mx-auto max-w-7xl" {...softReveal}>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-sm uppercase tracking-[0.35em] text-rose-blush/65">scrapbook / gallery</p>
            <h2 className="mt-3 font-hand text-6xl text-white md:text-8xl">little scraps of us ♡</h2>
          </div>
          <p className="max-w-sm font-serif text-lg leading-8 text-white/65">
            drag the photos, rearrange the memories, pretend the internet is a desk covered in paper.
          </p>
        </div>

        <div className="relative min-h-[45rem] rounded-[2rem] border border-white/10 bg-[#211d1b]/80 p-6 shadow-paper grain md:p-12">
          <div className="absolute left-7 top-24 hidden font-hand text-6xl text-paper-cream/50 md:block">✿</div>
          <div className="absolute right-12 top-12 font-hand text-5xl text-paper-cream/60">♡</div>
          <div className="absolute bottom-16 right-16 hidden font-hand text-5xl text-paper-cream/45 md:block">✧</div>

          <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {scrapbookPhotos.map((photo, index) => (
              <div key={photo.label} className={index % 2 ? "lg:mt-24" : "lg:mt-4"}>
                <Polaroid label={photo.label} kind={photo.kind} image={photo.image} rotate={photo.rotate} draggable />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xs rotate-2 rounded-sm bg-paper-beige p-7 font-hand text-3xl leading-9 text-cocoa shadow-paper">
            not many photos, but a lot of memories.
            <span className="mt-3 block text-right text-rose-dust">♡</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
