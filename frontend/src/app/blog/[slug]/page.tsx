import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, User, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";

// ─── Article body components ────────────────────────────────────────────────

function ZenithCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/8 p-6 sm:p-8">
      <h3 className="mb-3 text-xl font-bold text-[#7C3AED]">
        How Zenith Trends Can Help
      </h3>
      <div className="text-slate-700 leading-relaxed">{children}</div>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Get in Touch <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function BrandedMerchandiseROIBody() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-lg leading-relaxed text-slate-700 mb-8">
        Every year, businesses across New Zealand invest in promotional products — branded tote bags, pens,
        water bottles, tech accessories — and every year, finance directors ask the same question: what exactly
        are we getting back? It's a fair challenge. Unlike a digital ad campaign with click-through rates and
        conversion metrics, a branded coffee cup doesn't fire a pixel when someone decides to pick up the phone.
        But the data tells a compelling story. Promotional merchandise is one of the most cost-effective
        touchpoints in a marketing mix — and when it's done well, the returns are measurable, lasting, and
        surprisingly strong.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Brand Recall That Outlasts Your Last Campaign
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        One of the most consistent findings in promotional products research is the rate at which branded
        merchandise drives unaided recall. Unlike a social media post that disappears from a feed in hours,
        or a display ad that's ignored in seconds, a well-chosen product lives on a desk, in a bag, or on a
        kitchen bench for months — sometimes years. Every time someone picks up that branded pen or reaches
        for that insulated drink bottle, your logo lands in front of them again. No additional spend required.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Studies from the Advertising Specialty Institute (ASI) show that 85% of consumers recall the advertiser
        on a promotional product they received. More importantly, 58% keep the item for between one and four
        years. When you divide your unit cost by the number of impressions generated over that period, the
        cost-per-impression of promotional merchandise competes directly — and often beats — digital and print
        advertising. For New Zealand businesses operating in competitive B2B markets, that sustained presence
        matters in ways that one-time ad placements simply can't replicate.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Pipeline Acceleration at Events and Trade Shows
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Trade shows and corporate events are where promotional merchandise earns its reputation most visibly.
        When you're competing for attention on a busy conference floor, the right branded item can be the
        difference between a business card that gets binned and a genuine conversation that leads somewhere.
        Products that are useful, relevant to your audience, and well-branded create an instant association
        between your organisation and something the recipient values.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Research consistently shows that promotional products increase the likelihood of a follow-up call or
        email after an event. Recipients who received a useful branded item are more likely to recall the
        brand, respond to outreach, and feel positively disposed towards a conversation. When you're investing
        thousands in event attendance, adding a considered branded product to your strategy is a modest
        incremental cost with meaningful returns in lead conversion. The product becomes the physical anchor
        of the event memory — and that's commercially valuable.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        The Long Game — Repeat Impressions vs One-Off Ads
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The economics of branded merchandise look different once you factor in longevity. A digital ad run
        costs money every time it's displayed. A branded product, once purchased, continues to work on your
        behalf at zero ongoing cost. A quality insulated drink bottle with an average daily use of once and a
        lifespan of two years generates over 700 organic brand impressions — at a unit cost that's often well
        under $30.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Compare that to paid search or social advertising, where $30 buys a handful of clicks and no
        guarantee of continued brand presence. The difference isn't just mathematical — it's strategic.
        Promotional merchandise builds cumulative familiarity, which matters enormously in B2B sales cycles
        where relationships and recognition drive decisions. The more your brand is present in someone's
        day-to-day life, the more likely they are to think of you when a relevant need arises. Familiarity
        converts. Promotional products build familiarity at scale.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        What Separates High-ROI Products from Expensive Clutter
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Not all promotional products are created equal when it comes to return. The ones that deliver the best
        ROI share a few common characteristics: they're genuinely useful in the recipient's context, the
        quality matches or exceeds expectation, and the branding is applied with restraint and craft. A cheap
        pen that runs out of ink in a week does more damage than no pen at all. A beautifully made notebook
        with subtle, tasteful branding becomes something the recipient is proud to carry.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The other factor that dramatically affects ROI is relevance. A tech accessory for a tech company's
        audience. A fitness item for a wellness brand's events. A premium food hamper for high-value client
        gifting at Christmas. The more the product speaks to the recipient's world, the longer it stays in
        use — and the better your cost-per-impression becomes. Generic always underperforms. Considered always
        outperforms. Investing a modest amount of upfront thinking into product selection is consistently the
        highest-return action you can take in a merchandise programme.
      </p>

      <ZenithCallout>
        <p>
          At Zenith Trends, we work with New Zealand businesses to source and brand merchandise that delivers
          measurable results — not just boxes of stuff with a logo on them. We help clients identify the right
          product categories for their audience, brief them on quality tiers and what each delivers at
          different price points, and manage the entire process from product selection through to print-ready
          artwork and delivery. Whether you're planning for an event, building a client gifting programme, or
          refreshing your staff merchandise, we'll help you make choices that drive real return.
        </p>
      </ZenithCallout>
    </div>
  );
}

function CorporateGiftingBudgetBody() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-lg leading-relaxed text-slate-700 mb-8">
        Corporate gifting in New Zealand is a more nuanced discipline than most businesses treat it as. The
        instinct is often to find a single product, order in bulk, and send it to everyone — clients, staff,
        prospects, partners — and call it done. But relationships are not uniform, and gifts that fail to
        reflect the level of relationship they represent can actually do harm. A $15 branded cooler bag sent
        to a major client who generates six figures in annual revenue reads as an afterthought. A $150 gift
        sent to a cold prospect looks presumptuous. Getting the budget right matters as much as getting the
        product right.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Tier 1: Key Clients and Strategic Partners ($100–$200+ per recipient)
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Your most valuable relationships deserve your most considered gifts. At this tier, you're not just
        expressing appreciation — you're reinforcing a long-term partnership and communicating that you
        understand the relationship's value. Gifts in this range should feel premium, have a clear use case
        for the recipient, and ideally reflect something specific about your relationship with them.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        In practice, this means curated gift sets — a quality insulated bottle, a travel pouch, a
        locally-sourced New Zealand food item — assembled in branded packaging that presents well. It means
        materials that feel considered: leather accessories, premium tech, artisan food products. At this
        price point, the presentation and packaging are as important as the product inside. A poorly packaged
        $150 gift can feel worse than a beautifully assembled $60 kit. Factor in the full gifting experience,
        not just the unit cost. A personalised note or handwritten card elevates even a mid-range product into
        something genuinely memorable.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Tier 2: Staff Recognition and Team Gifting ($50–$100 per person)
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Staff gifting sits in a different emotional register to client gifting. The goal here is to say "you
        matter to us" in a way that feels personal and thoughtful, without creating awkward comparisons across
        teams or seniority levels. Branded merchandise at this tier needs to be genuinely useful — something
        people will actually take home and use, not leave in a desk drawer at the end of the year.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Popular choices in this range include quality insulated drinkware, branded tech accessories like
        wireless chargers and earbuds, outdoor and leisure gear, and premium food hampers. This tier is
        especially effective for end-of-year gifting, milestone recognition (work anniversaries, project
        completions), and onboarding packages for new starters. A branded onboarding kit that includes
        everyday-use items — a quality pen, a notebook, a drinkware item — sets a strong tone for a new
        employee's experience of your brand from day one and creates a sense of belonging before their first
        week is through.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Tier 3: General Corporate and Event Gifting ($20–$50 per person)
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        This is the working tier of corporate gifting — the range where most conference kits, event giveaways,
        and seasonal gifts land. At $20–$50 per person, you have enough budget to source something genuinely
        useful and well-branded, but you'll need to make deliberate choices about where the value goes. This
        isn't the tier for premium materials or elaborate packaging, but it absolutely is the tier for quality
        and relevance.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        At this range, think single-product gifts that hit a clear use case: a quality branded water bottle
        for an outdoor-themed event, a travel adapter for a conference, a branded tote with a practical item
        inside. The key is to resist the temptation to fill the price point with low-value extras. One good
        product at $40 is more memorable than three forgettable items totalling the same cost. Utility beats
        quantity at this tier, every time. Choose based on what the recipient will actually reach for, not on
        what fills a box attractively.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Tier 4: Prospects and Brand Awareness (Under $20 per item)
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        At this price point, the objective is different: you're building awareness and creating positive
        initial impressions, not reinforcing an existing relationship. Prospects haven't earned a premium gift,
        and expensive items sent cold can actually create the wrong impression — it can feel transactional or
        pressure-creating rather than generous. What works here is branded stationery, small tech accessories,
        branded bags and totes, and consumable items like locally-themed food products.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The discipline at this tier is to choose items that will be kept and used — things that earn their
        place in a bag, on a desk, or in a kitchen. A cheap item that gets thrown away immediately is a
        complete waste of budget. A useful $12 item that sits on someone's desk for six months is excellent
        brand investment. Volume also matters here: if you're attending a trade show and have 500 prospects
        walking past your stand, the per-unit cost needs to support that scale while still being worthwhile.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Planning Ahead: NZ-Specific Considerations
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Gifting in New Zealand has some practical dimensions worth planning for. Lead times for branded
        merchandise typically run two to four weeks depending on the product and print method — leave it too
        late before Christmas or end-of-financial-year, and you'll either pay rush fees or miss the window
        entirely. The pre-Christmas period in particular is the most congested time for branded merchandise
        suppliers across the country. Starting your gifting programme planning in October rather than
        November is the single best way to avoid the stress of late delivery.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        GST is applicable on all corporate gifts. If you're gifting to overseas partners or clients, factor
        in international shipping timelines and potential customs delays. New Zealand freight costs can add
        meaningfully to your per-unit cost at lower quantities, so consolidating orders and shipping to a
        single address for internal distribution is almost always more efficient than individual dispatch.
        Consider working with a supplier who can hold inventory and fulfil on your behalf for ongoing gifting
        programmes — it removes the logistical overhead entirely.
      </p>

      <ZenithCallout>
        <p>
          Zenith Trends works with New Zealand businesses across all gifting tiers — from small-run premium
          kits for key clients to large-quantity event merchandise. We help you navigate product selection,
          pricing, and lead times so your gifting programme lands on time and on budget. We can also advise
          on packaging, kitting, and fulfilment for complex multi-recipient programmes. Whether you're
          planning a one-off end-of-year gift run or setting up a recurring gifting calendar, we're here to
          make it seamless.
        </p>
      </ZenithCallout>
    </div>
  );
}

function WellnessGiftsBody() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-lg leading-relaxed text-slate-700 mb-8">
        Something shifted in New Zealand's corporate culture in recent years. The conversation around employee
        wellbeing moved from HR policy language into everyday practice — flexible working, mental health days,
        manager check-ins. And as that shift happened in workplaces, it started to show up in how companies
        were choosing to gift their teams and clients. Wellness-themed merchandise — hydration products,
        relaxation kits, fitness accessories, mindfulness items — went from a niche category to one of the
        fastest-growing segments in branded merchandise. In 2026, it's not a trend anymore. It's an
        expectation for brands that understand where their audience is.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        The Shift in What People Value from Their Workplaces
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        New Zealand employers know that the competition for talent is real, and that the intangibles matter
        as much as the salary package. Staff want to feel that their employer sees them as a whole person,
        not just a resource. Gifting wellness products — a quality insulated bottle, a foam roller, a
        meditation journal, a sleep-supporting aromatherapy kit — signals that you understand what matters
        to people outside the office walls.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The same dynamic plays out in client relationships. A corporate gift that says "we care about your
        wellbeing" lands differently from a branded mug. It creates a warmer, more human association with
        your brand. Especially in industries like financial services, legal, and consulting — where
        relationships are everything and differentiation is subtle — the choice to gift something that
        genuinely serves the recipient can be the thing that's remembered longest. It communicates that your
        brand thinks about people, not just transactions.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        What Falls Under the Wellness Category
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Wellness gifts are broader than they might initially sound. The category encompasses several clear
        sub-segments, each suited to different audiences and occasions:
      </p>
      <ul className="mb-6 space-y-4 text-base leading-relaxed text-slate-700">
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Hydration and nutrition:</strong> Premium insulated drink
          bottles, reusable coffee cups, infuser water bottles, healthy snack hampers. These are consistently
          top performers in corporate gifting because they're used daily, they're highly visible on desks and
          in gym bags, and the quality range runs from accessible to genuinely premium.
        </li>
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Movement and fitness:</strong> Resistance bands, gym bags,
          yoga mats, foam rollers, fitness accessories. These work especially well for health-sector clients,
          sporting events, and company wellness campaign launches.
        </li>
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Rest and recovery:</strong> Sleep masks, aromatherapy
          diffusers, herbal tea sets, relaxation candles. Increasingly popular as end-of-year gifts that
          acknowledge the pace of the year and the value of recovery.
        </li>
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Mindfulness and focus:</strong> Journals, productivity
          planners, desk plants, guided meditation accessories. These resonate particularly with professional
          audiences who are deliberate about how they work and think.
        </li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Why Wellness Gifts Outperform Traditional Novelty Items
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The traditional corporate gift — a stress ball, a branded keyring, a cheap mug — has a predictable
        lifecycle. It enters the office, sits on a desk for a few weeks, and ends up in a drawer or a bin.
        It fulfilled the obligation of gifting without creating any meaningful association. Wellness products
        work differently because they're integrated into the recipient's actual routine.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        A good quality insulated bottle goes on a desk, to the gym, and into a bag. A sleep mask is used
        several times a week. A quality journal is filled with notes over months. This integration into daily
        routine is the commercial point: every time the product is used, the brand is present — not as an
        afterthought, but in a moment of self-care or intentional daily activity. The brand association
        becomes positive and personal in a way that a novelty item never achieves. You're not just
        advertising at someone; you're genuinely helping them.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Getting It Right: Practical vs. Indulgent
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The risk with wellness gifting is misjudging the balance between practical and indulgent. A gym
        towel is practical but can feel clinical without context. A face mask set is indulgent but may not
        suit everyone on a broad distribution list. The sweet spot is products that feel considered and
        personal, while being broadly appropriate for a professional audience.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        For corporate audiences, the best-performing wellness gifts are items that can be used in multiple
        contexts — at the office, at home, and in leisure time. Premium insulated drinkware is the standout
        performer here, consistently. Quality sleep accessories (comfortable eye masks, herbal tea blends)
        work well for end-of-year gifting. Branded tote bags with curated wellness contents — a candle, a
        snack, a drink bottle — deliver a thoughtful unboxing experience without requiring the recipient to
        make any lifestyle choices about what suits them. Curation does the personalisation work so the
        individual item doesn't have to.
      </p>

      <ZenithCallout>
        <p>
          Zenith Trends stocks one of New Zealand's most comprehensive ranges of wellness-branded merchandise,
          from daily-use hydration products through to curated wellness gift sets. We work with brands to
          build gifting programmes that reflect their values and their audience — selecting products at the
          right quality tier, managing custom branding, and handling fulfilment for everything from individual
          gifts to large corporate orders. If you're looking to shift your gifting programme towards something
          that genuinely resonates with your people and clients, we'd love to help you get it right.
        </p>
      </ZenithCallout>
    </div>
  );
}

function PromotionalMistakesBody() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-lg leading-relaxed text-slate-700 mb-8">
        Promotional products can be one of the best-performing items in your marketing budget — or they can
        be a waste of money that ends up in a landfill within weeks. The difference usually comes down to
        avoidable mistakes made during the planning and ordering process. After working with hundreds of New
        Zealand businesses on their branded merchandise, we've seen the same errors come up again and again.
        Some cost brands money directly. Others cost them reputation. Here are the five most common
        promotional product mistakes — and what to do instead.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Mistake 1: Choosing the Cheapest Option Available
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Price sensitivity is understandable. Budgets are real. But consistently choosing the cheapest
        available option for promotional products is one of the fastest ways to damage rather than build
        your brand.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        When someone receives a promotional product, they immediately form a judgement about the brand behind
        it based on the quality of what they're holding. A pen that skips, a tote bag with a strap that
        frays, a USB drive that doesn't connect reliably — these don't just fail as products, they actively
        associate your brand with poor quality. The implicit message is: this is what we think you're worth.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The better approach is to spend appropriately and narrow the scope. Instead of buying 500 items of
        low quality, buy 200 items of genuine quality and direct them more precisely. The per-unit cost goes
        up but the per-impression value increases dramatically, because the products actually get used. A
        $25 well-made item that stays in circulation for a year outperforms a $5 item that's discarded
        within a week — in every measurable way.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Mistake 2: Ignoring Your Audience's Actual Context
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        A branded item is only as effective as it is relevant to the person receiving it. And "relevant"
        means more than just "this person exists." It means: does this product fit into their life in a way
        that creates genuine use?
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        A golf accessory kit sent to a client who doesn't play golf will land flat. A gym bag for an
        audience of predominantly desk-based professionals might not get used. Branded outdoor gear for an
        urban professional audience, however thoughtfully made, may never leave the packaging. The mistake
        is choosing products that you like, or that seem generally appealing, without interrogating whether
        they actually fit the recipients' context.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The question to ask is: where is this person's life? What are their daily routines? What products
        would genuinely earn a place in those routines? The brands that get the most from promotional
        merchandise invest a modest amount of time at the front end thinking about their audience before
        they think about the product. That order of operations — audience first, product second — is one of
        the most reliable paths to a successful outcome.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Mistake 3: Leaving It Too Late
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The single most preventable promotional product problem we encounter is the last-minute order. It
        happens predictably: an event is planned months out, merchandise is discussed and then deprioritised,
        and suddenly it's two weeks before the conference and someone needs 400 branded products by Friday.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Quality branded merchandise has lead times. Depending on the product and the print method, standard
        lead times run from 10 to 20 business days from artwork approval. Rush orders are possible, but they
        come with significant cost premiums and restrict your product options dramatically. Some products
        simply cannot be rushed at all. Embroidery, speciality print techniques, and imported products in
        particular require adequate lead time — and cutting that short means settling for whatever happens
        to be in stock.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The fix is straightforward: treat branded merchandise with the same planning rigour as any other
        event element. As soon as an event is in the calendar, start the merchandise conversation. This
        gives you time to explore options, request samples, refine artwork, and order without premium
        pressure. Good planning is free. Rush fees are not.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Mistake 4: Weak or Inconsistent Branding
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Promotional products only work if the branding on them is done well. And "done well" doesn't mean
        maximally visible — it means correctly applied, consistently sized, and aligned with your brand
        guidelines. We see four common branding errors:
      </p>
      <ul className="mb-6 space-y-4 text-base leading-relaxed text-slate-700">
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Oversizing the logo.</strong> A logo that covers 80% of a
          product's surface looks desperate. Branding should feel intentional, not intrusive.
        </li>
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Mismatched colours.</strong> Pantone matching matters. A brand
          colour that's slightly off in a print run degrades the quality of the piece and undermines brand
          consistency.
        </li>
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Poor placement.</strong> A logo positioned in an awkward spot
          — too low, too close to an edge, obscured by a seam or pocket — can ruin an otherwise quality
          product.
        </li>
        <li className="pl-4 border-l-2 border-[#7C3AED]/30">
          <strong className="text-slate-900">Inconsistency across items.</strong> If your pen, tote, and
          water bottle all use slightly different brand treatments, the cumulative effect is a brand that
          looks unpolished. Consistency across a range is what creates a professional impression.
        </li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-bold text-[#7C3AED]">
        Mistake 5: No Distribution Strategy
      </h2>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        Ordering the merchandise is one thing. Actually getting it to the right people is another — and it's
        the step that's most often treated as an afterthought.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        We've seen boxes of beautifully branded merchandise sitting unopened in a storage room months after
        the event they were ordered for, because no one planned the distribution logistics. We've seen
        expensive gift kits mailed to the wrong address because there was no clean recipient list. We've
        seen premium corporate gifts arrive after the relationship moment they were intended to celebrate
        had passed. In each case, the product investment was wasted entirely — not because of a problem with
        the merchandise, but because of a failure of execution.
      </p>
      <p className="mb-5 text-base leading-relaxed text-slate-700">
        The distribution strategy should be part of the initial merchandise brief: who receives it, when,
        by what method, and who is responsible for managing the process? For larger programmes, working with
        a supplier who offers kitting, storage, and fulfilment services removes this complexity entirely.
        Merchandise that doesn't get to the right people at the right time delivers zero ROI regardless of
        how good the product is.
      </p>

      <ZenithCallout>
        <p>
          Zenith Trends works with New Zealand businesses to avoid every one of these mistakes — from helping
          you select quality products at the right price point, to managing the artwork and proofing process,
          to handling kitting and fulfilment so your merchandise reaches recipients on time. We're direct and
          honest about what works at each budget level and what doesn't, because our reputation depends on
          your results. If you're planning a merchandise order and want to get it right the first time, get
          in touch with our team.
        </p>
      </ZenithCallout>
    </div>
  );
}

// ─── Article metadata ────────────────────────────────────────────────────────

interface Article {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  Body: React.ComponentType;
}

const articles: Record<string, Article> = {
  "branded-merchandise-roi": {
    title: "How Branded Merchandise Drives Real ROI",
    date: "20 March 2026",
    author: "Zenith Trends Team",
    readTime: "6 min read",
    category: "Strategy",
    image: "https://trends-assets.trends.nz/Images/ProductImg/116447-0.jpg",
    excerpt:
      "Think promotional products are just trinkets? The data tells a different story. We break down exactly how branded merchandise generates measurable returns — from brand recall to pipeline acceleration.",
    Body: BrandedMerchandiseROIBody,
  },
  "corporate-gifting-nz-budget-guide": {
    title: "Corporate Gifting in NZ: A Budget Guide for Every Relationship",
    date: "10 March 2026",
    author: "Zenith Trends Team",
    readTime: "5 min read",
    category: "Corporate Gifting",
    image: "https://trends-assets.trends.nz/Images/ProductImg/117823-0.jpg",
    excerpt:
      "Not every corporate gift should cost the same. Here's how to set the right budget based on who you're gifting — from key clients to new prospects — and what to choose at each tier.",
    Body: CorporateGiftingBudgetBody,
  },
  "wellness-gifts-corporate-nz": {
    title: "Why Wellness Gifts Are Winning in Corporate New Zealand",
    date: "14 February 2026",
    author: "Zenith Trends Team",
    readTime: "5 min read",
    category: "Trends",
    image: "https://trends-assets.trends.nz/Images/ProductImg/100648-0.jpg",
    excerpt:
      "Wellness-themed merchandise has moved from niche to mainstream in NZ's corporate gifting scene. Here's why brands are shifting budget towards wellbeing products — and how to get it right.",
    Body: WellnessGiftsBody,
  },
  "promotional-product-mistakes": {
    title: "5 Promotional Product Mistakes That Are Costing Your Brand",
    date: "15 January 2026",
    author: "Zenith Trends Team",
    readTime: "4 min read",
    category: "Strategy",
    image: "https://trends-assets.trends.nz/Images/ProductImg/110799-0.jpg",
    excerpt:
      "From ordering too many to choosing style over utility, these are the five most common promotional product errors we see — and how to fix them before they drain your marketing budget.",
    Body: PromotionalMistakesBody,
  },
};

// ─── Static params & metadata ────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found | Zenith Trends" };
  return {
    title: `${article.title} | Zenith Trends`,
    description: article.excerpt,
  };
}

// ─── Page component ──────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const { title, date, author, readTime, category, image, Body } = article;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80 line-clamp-1">{title}</span>
          </nav>

          {/* Category badge */}
          <span className="mb-4 inline-block rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{date}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1729]/30 to-transparent" />
      </div>

      {/* Article body */}
      <div className="bg-white">
        <Body />
      </div>

      {/* Back to blog */}
      <div className="bg-white px-4 pb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] transition-opacity hover:opacity-75"
        >
          ← Back to all articles
        </Link>
      </div>

      <CTABanner />
    </>
  );
}
