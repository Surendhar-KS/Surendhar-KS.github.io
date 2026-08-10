'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ChatAnimation from '../animations/ChatAnimation';
import Card1 from '../animations/Card1';
import Card2 from '../animations/Card2';
import { AwsCard, ServicenowCard, OracleCard } from '../graphics/FeatureCards';
import CertificateModal from '../CertificateModal';

const awsCerts = [
  { title: "AWS Certified Cloud Practitioner", path: "/certificates/aws-cloud-practitioner.pdf" }
];

const servicenowCerts = [
  { title: "ServiceNow Certified System Administrator", path: "/certificates/servicenow-csa.pdf" },
  { title: "ServiceNow CIS - Data Foundations", path: "/certificates/servicenow-cis-df.pdf" }
];

const oracleCerts = [
  { title: "Oracle Cloud Infrastructure Architect Associate", path: "/certificates/oracle-architect-associate.pdf" },
  { title: "Oracle Cloud Generative AI Professional", path: "/certificates/oracle-gen-ai-professional.pdf" },
  { title: "Oracle Cloud AI Foundations Associate", path: "/certificates/oracle-ai-foundations.pdf" }
];

export default function FeatureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCertificates, setActiveCertificates] = useState<{title: string, path: string}[]>([]);

  const openModal = (certs: {title: string, path: string}[]) => {
    setActiveCertificates(certs);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="w-full py-24 bg-[#faf7f3] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center"
          >
            <span className="text-sm font-semibold tracking-widest text-black/60 uppercase">Certifications</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-black max-w-2xl leading-tight"
          >
            Crafted with precision.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black/60 max-w-2xl"
          >
            A showcase of modern software, AI, and cloud solutions built for real-world impact.
          </motion.p>
        </div>

        {/* Certification Cards Grid */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full flex justify-center"
          >
            <AwsCard onOpenCertificates={() => openModal(awsCerts)}>
              <Card1 />
            </AwsCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <ServicenowCard onOpenCertificates={() => openModal(servicenowCerts)}>
              <ChatAnimation />
            </ServicenowCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <OracleCard onOpenCertificates={() => openModal(oracleCerts)}>
              <Card2 />
            </OracleCard>
          </motion.div>

        </div>
      </div>

      <CertificateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        certificates={activeCertificates} 
      />
    </section>
  );
}
