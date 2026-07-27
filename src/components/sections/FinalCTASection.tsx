import { ConversionSectionScrim } from "@/components/background/ConversionSectionScrim";
import {
  Container,
  Display,
  Body,
  Eyebrow,
  LiveSeatCounter,
  EventPrice,
} from "@/components/ui";
import { FinalCTAActions } from "@/components/sections/FinalCTAActions";
import { event } from "@/content/event";
import { finalCta } from "@/content/registration";

/**
 * Section 8 — Final CTA. Emotional last push — no duplicate form (Issues 1, 5).
 */
export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative z-20 scroll-mt-[calc(var(--nav-h)+1.5rem)] overflow-hidden border-t border-white/8 py-section pb-28 lg:pb-section"
    >
      <ConversionSectionScrim />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <Eyebrow tone="accent" withRule>
            {finalCta.eyebrow}
          </Eyebrow>
          <Display as="h2" id="final-cta-heading" size="l" className="text-balance">
            The Future Won&apos;t Hire Humans Who Compete With AI. It Will Hire Humans Who
            Build AI.
          </Display>

          <Body size="lg" className="max-w-lg text-text-2">
            {finalCta.urgency}
          </Body>

          <div className="flex w-full min-w-0 max-w-2xl flex-col items-center gap-6 rounded-lg border border-primary/20 bg-primary/[0.04] px-6 py-8 sm:px-10 sm:py-10">
            <LiveSeatCounter className="w-full" />
            <p className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 font-display text-h3 text-text">
              <EventPrice size="lg" />
              <span className="font-sans text-body text-text-2">
                {event.schedule.finalCtaPriceSuffix}
              </span>
            </p>
          </div>

          <FinalCTAActions />
        </div>
      </Container>
    </section>
  );
}
