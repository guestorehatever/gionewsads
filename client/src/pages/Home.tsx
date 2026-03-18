import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Shield } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Prestige & Authority
 * This page embodies the certificate aesthetic with:
 * - Serif typography (Playfair Display) for headings to convey authority
 * - Cream background with teal and gold accents
 * - Asymmetric layout with diagonal elements
 * - Decorative borders and ornamental dividers
 * - Formal, exclusive tone matching the certificate design
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Diagonal Accent */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Diagonal Background Accent */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-20"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.20 70) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container max-w-4xl">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                Exclusive Program
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-bold text-primary leading-tight">
              Trusted Advertiser
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto">
              Selected publishers who have earned the privilege to publish ads
              without verification
            </p>

            <div className="pt-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663424581382/SdFZTNsksQ7KVWzd7LT89Z/seal-badge-dqWyAgcZ27Ue7cWPtouq6c.webp"
                alt="Trusted Advertiser Seal"
                className="w-40 h-40 mx-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificate-Style Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-4xl">
          <Card className="certificate-frame border-accent bg-white/50 backdrop-blur-sm">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-display font-bold text-primary">
                  Certificate of Selection
                </h2>
                <p className="text-lg text-foreground/70">
                  This certificate is proudly presented to
                </p>
              </div>

              <div className="border-b-2 border-accent/30 pb-6">
                <p className="text-center text-2xl font-display text-primary italic">
                  [Your Company Name]
                </p>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-foreground leading-relaxed">
                  In recognition of your commitment to quality advertising, you
                  have been selected as a <span className="gold-text">Trusted Advertiser</span>. This
                  distinction grants you the privilege to publish advertisements
                  directly without undergoing standard verification procedures.
                </p>

                <p className="text-foreground leading-relaxed">
                  This certification reflects our confidence in your advertising
                  practices and your dedication to maintaining ethical,
                  appropriate content standards.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <div className="text-center">
                  <p className="font-display text-xl font-bold text-primary">
                    Gio Becerra
                  </p>
                  <p className="text-sm text-foreground/60">Program Director</p>
                  <div className="border-t-2 border-accent/50 w-32 mx-auto mt-4" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Privileges Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-primary text-center mb-12">
            Your Privileges
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-accent/30 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Direct Publishing
                  </h3>
                  <p className="text-foreground/70">
                    Publish advertisements immediately without waiting for
                    verification or approval processes.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/30 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Exclusive Status
                  </h3>
                  <p className="text-foreground/70">
                    Join an elite group of advertisers recognized for their
                    commitment to quality and ethical standards.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/30 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Streamlined Process
                  </h3>
                  <p className="text-foreground/70">
                    Enjoy faster turnaround times and reduced administrative
                    overhead in your advertising campaigns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/30 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Trust Badge
                  </h3>
                  <p className="text-foreground/70">
                    Display the Trusted Advertiser badge on your materials to
                    enhance credibility and brand authority.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-4xl">
          <div className="border-l-4 border-accent pl-8 py-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Terms & Conditions
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <p>
                Your status as a Trusted Advertiser comes with significant
                responsibility. You are expected to maintain the highest
                standards of advertising ethics and content appropriateness.
              </p>

              <p className="font-semibold text-foreground">
                Prohibited Content:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Political or controversial content</li>
                <li>Violent or graphic material</li>
                <li>Misleading or false claims</li>
                <li>Content violating platform policies</li>
                <li>Inappropriate or offensive material</li>
              </ul>

              <p className="pt-4 font-semibold text-foreground">
                Violation Consequences:
              </p>
              <p className="text-lg font-bold text-accent">
                Any violation of these standards will result in immediate
                revocation of your Trusted Advertiser status and permanent ban
                from publishing advertisements on our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-primary text-center mb-12">
            Report or Inquire
          </h2>

          <Card className="p-8 border-accent/30">
            <p className="text-foreground/70 mb-8 text-center">
              Have questions about the Trusted Advertiser program or need to
              report an issue? Fill out the form below and our team will get
              back to you promptly.
            </p>

            {/* Embedded Google Form */}
            <div className="w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScMDBpErOXZhBAyjcpWCH1P_UUxq792PSpwz3p0tFavNT60zg/viewform?usp=publish-editor"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-accent/20 bg-muted/20">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4">
            <p className="text-foreground/60">
              © 2026 Trusted Advertiser Program. All rights reserved.
            </p>
            <p className="text-sm text-foreground/50">
              This program is designed for select publishers who meet our
              standards for quality and ethical advertising.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
