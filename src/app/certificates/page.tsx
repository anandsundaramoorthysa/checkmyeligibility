import type { Metadata } from "next";
import { FileCheck, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CertificateCard } from "@/components/marketing/CertificateCard";
import { AskBotCta } from "@/components/marketing/AskBotCta";
import { PageHero } from "@/components/layout/PageHero";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/site";
import { getAllCertificates } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Certificates",
  description:
    "Essential Indian government certificates — income, caste, domicile, birth, death, EWS, disability (UDID), and ration card. Documents needed and how to apply officially.",
  path: "/certificates",
});

export default async function CertificatesPage() {
  const certificates = await getAllCertificates();

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Government certificates",
    description:
      "Essential Indian government certificates and how to apply for them.",
    url: new URL("/certificates", SITE.url).toString(),
  };

  return (
    <>
      <JsonLd
        data={[
          collectionLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Certificates", path: "/certificates" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Certificates"
        title="The documents that unlock your benefits"
        lead={
          <>
            Many schemes ask for the same core certificates. Here&rsquo;s what each
            one is for, the papers you&rsquo;ll need, and how to apply on the
            official portal.
          </>
        }
        art={
          <SpotIllustration
            icon={FileText}
            tone="navy"
            label="Government certificates and documents"
          />
        }
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-surface-subtle p-6">
            <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink-muted">
              Tip: keep digital copies of your Aadhaar, address proof, and a recent
              income proof handy — they cover the document checklist for most of these
              certificates.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <li key={certificate.id} className="flex">
                <CertificateCard certificate={certificate} />
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <AskBotCta
              title="Not sure which certificate you need?"
              body="Tell the assistant what you're applying for and it will point you to the right documents."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
