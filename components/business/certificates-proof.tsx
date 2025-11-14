'use client'

import { motion } from 'framer-motion'
import { Award, Download, Share2, CheckCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function CertificatesProof() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)
  const [showShare, setShowShare] = useState(false)

  const certificates = [
    {
      id: 1,
      project: 'Solar Farm India',
      co2: 5000,
      date: 'Mar 2024',
      certId: 'CSF-2024-001',
      verified: true
    },
    {
      id: 2,
      project: 'Reforestation Brazil',
      co2: 3500,
      date: 'Feb 2024',
      certId: 'CRB-2024-002',
      verified: true
    },
    {
      id: 3,
      project: 'Wind Energy Kenya',
      co2: 4200,
      date: 'Jan 2024',
      certId: 'CWK-2024-003',
      verified: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-bold text-white mb-2">Certificates & Proof of Offset</h1>
        <p className="text-slate-300">View and manage your blockchain-verified certificates</p>
      </motion.div>

      {/* Certificates List */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedCert(cert.id)}
            className="group cursor-pointer"
          >
            <div className="bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/70 transition-all relative overflow-hidden">
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ['−100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-emerald-400" />
                  {cert.verified && (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  )}
                </div>

                <h3 className="font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{cert.project}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">CO₂ Offset:</span>
                    <span className="font-bold text-emerald-400">{cert.co2.toLocaleString()} tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Certificate ID:</span>
                    <span className="text-xs text-slate-300 font-mono">{cert.certId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Date:</span>
                    <span className="text-sm text-slate-300">{cert.date}</span>
                  </div>
                </div>

                {cert.verified && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    className="inline-flex items-center gap-1 bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1 mb-4"
                  >
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400 font-semibold">Blockchain Verified</span>
                  </motion.div>
                )}

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => { e.stopPropagation(); setShowShare(!showShare) }}
                    className="flex-1 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-semibold transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Share Modal */}
      {showShare && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowShare(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-slate-800 rounded-xl p-6 max-w-sm w-full border border-emerald-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-white mb-4">Share Certificate</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Share on LinkedIn
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Share on Instagram
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Copy Link
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
