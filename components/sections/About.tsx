"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { fadeUpView, staggerContainer, staggerItem } from "@/lib/animations";

export function About() {
  return (
    <section className="py-16 sm:py-24" id="about">
      <Container className="relative">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
        >
          <SectionHeading title={about.title} subtitle={about.subtitle} />
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card hover={false}>
                <p className="text-foreground/90 font-sans text-base sm:text-lg leading-relaxed text-center">
                  {about.description}
                </p>
              </Card>
            </motion.div>
            <motion.ul
              className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-sans text-sm text-muted"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={staggerContainer.viewport}
            >
              {about.pillars.map((pillar, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  variants={staggerItem}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 + 0.1 }}
                  />
                  {pillar}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
